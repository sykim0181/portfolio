import { useEffect, useRef } from "react";
import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  Render,
  Runner,
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
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const engine = Engine.create();
    // 중력 세기 설정
    engine.gravity.y = 0;

    const render = Render.create({
      element: container,
      engine,
      canvas,
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
      const balls: Matter.Body[] = [];

      for (let i = 0; i < n; i++) {
        const x = radius + Math.random() * (width - radius * 2);
        const y = radius + Math.random() * (height - radius * 2);

        const ball = Bodies.circle(x, y, radius, {
          render: {
            fillStyle: ballColor,
            opacity: 0.3,
          },
          restitution: 1,
          frictionAir: 0,
          friction: 0,
          frictionStatic: 0,
          density: 0.08,
        });

        Body.setVelocity(ball, {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 3,
        });

        balls.push(ball);
      }
      return balls;
    }

    const n = 8;
    let balls = getBalls(width, height, n);
    Composite.add(engine.world, balls);

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
    Composite.add(engine.world, walls);

    // 마우스 위치 추적
    const mousePos = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - canvasRect.left;
      mousePos.y = e.clientY - canvasRect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const repelHandler = () => {
      const repelRadius = 200;
      const targetAccel = 0.015;

      balls.forEach((ball) => {
        const dx = ball.position.x - mousePos.x;
        const dy = ball.position.y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < repelRadius) {
          const t = 1 - dist / repelRadius;
          const accel = t * t * targetAccel;
          const forceMag = accel * ball.mass; // F = m * a

          Body.applyForce(ball, ball.position, {
            x: (dx / dist) * forceMag,
            y: (dy / dist) * forceMag,
          });
        }
      });
    };

    Events.on(engine, "beforeUpdate", repelHandler);

    // 윈도우 리사이즈 시 바뀐 윈도우 크기에 맞춰 공, 벽 다시 만들기
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;

      Render.setSize(render, newWidth, newHeight);

      Composite.remove(engine.world, balls);
      Composite.remove(engine.world, walls);

      balls = getBalls(newWidth, newHeight, n);
      walls = getWalls(newWidth, newHeight);
      Composite.add(engine.world, [...balls, ...walls]);
    };

    window.addEventListener("resize", handleResize);

    // 마우스 조작 설정
    // const mouse = Mouse.create(render.canvas);
    // const mouseConstraint = MouseConstraint.create(engine, {
    //   mouse,
    //   constraint: {
    //     stiffness: 0.2,
    //     render: {
    //       visible: false,
    //     },
    //   },
    // });
    // // World.add(engine.world, [mouseConstraint]);
    // // 스크롤이 가능하도록 wheel 이벤트 핸들러 제거
    // const mouseWithSource = mouse as any;
    // mouseConstraint.mouse.element.removeEventListener(
    //   "wheel",
    //   mouseWithSource.mousewheel
    // );

    const runner = Runner.create();
    Runner.run(runner, engine);

    Render.run(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      Events.off(engine, "beforeUpdate", repelHandler);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [ballColor, backgroundColor]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default DroppingBalls;
