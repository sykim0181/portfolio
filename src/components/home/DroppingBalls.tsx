import { useEffect, useRef } from "react";
import {
  Bodies,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js";

interface DroppingBallsProps {
  ballColor: string;
  backgroundColor: string;
}

const DroppingBalls = ({ ballColor, backgroundColor }: DroppingBallsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const rect = container?.getBoundingClientRect();
    const width = rect?.width ?? 0;
    const height = rect?.height ?? 0;

    const engine = Engine.create();
    // 중력 세기 설정
    // engine.gravity.x = 0;
    engine.gravity.y = 1.5;

    const render = Render.create({
      element: container ?? undefined,
      engine,
      canvas: canvasRef.current ?? undefined,
      bounds: {
        min: { x: 0, y: 0 },
        max: { x: width, y: height },
      },
      options: {
        width,
        height,
        wireframes: false,
        background: backgroundColor,
      },
    });

    function computeRadius(width: number, height: number, n: number) {
      const cols = Math.ceil(Math.sqrt(n));
      const rows = Math.ceil(n / cols);

      const cellWidth = width / cols;
      const cellHeight = height / rows;

      return Math.min(cellWidth, cellHeight) / 2;
    }

    function getBalls(width: number, height: number, n: number) {
      const radius = computeRadius(width, height, n);
      const cols = Math.floor(width / (2 * radius));
      const elements: Matter.Body[] = [];
      for (let i = 0; i < n; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);

        const element = Bodies.circle(
          radius + col * 2 * radius,
          radius + row * 2 * radius,
          radius,
          {
            render: {
              fillStyle: ballColor,
            },
            restitution: 0.5,
          }
        );
        elements.push(element);
      }
      return elements;
    }

    const n = 8;
    let balls = getBalls(width, height, n);
    World.add(engine.world, balls);

    // 벽 생성
    function getWalls(width: number, height: number) {
      const topWall = Bodies.rectangle(width / 2, 0, width, 1, {
        isStatic: true,
        render: { visible: false },
      });
      const leftWall = Bodies.rectangle(0, height / 2, 1, height, {
        isStatic: true,
        render: { visible: false },
      });
      const rightWall = Bodies.rectangle(width, height / 2, 1, height, {
        isStatic: true,
        render: { visible: false },
      });
      const bottomWall = Bodies.rectangle(width / 2, height, width, 1, {
        isStatic: true,
        render: { visible: false },
      });

      return [topWall, leftWall, rightWall, bottomWall];
    }
    let walls = getWalls(width, height);
    World.add(engine.world, walls);

    // 윈도우 리사이즈 시 바뀐 윈도우 크기에 맞춰 공, 벽 다시 만들기
    const handleResize = () => {
      const rect = container?.getBoundingClientRect();
      const newWidth = rect?.width ?? 0;
      const newHeight = rect?.height ?? 0;

      Render.setSize(render, newWidth, newHeight);

      World.remove(engine.world, balls);
      World.remove(engine.world, walls);

      balls = getBalls(newWidth, newHeight, n);
      walls = getWalls(newWidth, newHeight);
      World.add(engine.world, [...balls, ...walls]);
    };

    window.addEventListener("resize", handleResize);

    // 마우스 조작 설정
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    World.add(engine.world, [mouseConstraint]);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Render.run(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [ballColor, backgroundColor]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="bg-pink w-full h-full"
        // style={{ backgroundColor: "pink" }}
      />
    </div>
  );
};

export default DroppingBalls;
