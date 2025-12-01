export type TSkill = {
  name: string;
  src: string;
};

export type TSkillGroup = {
  name: string;
  skills: TSkill[];
};

export const SKILL_DATA: TSkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        src: "/skills/react.svg",
      },
      {
        name: "Next.js",
        src: "/skills/nextjs.svg",
      },
      {
        name: "Javascript",
        src: "/skills/javascript.svg",
      },
      {
        name: "Typescript",
        src: "/skills/typescript.svg",
      },
      {
        name: "HTML",
        src: "/skills/html5.svg",
      },
      {
        name: "CSS",
        src: "/skills/css3.svg",
      },
    ],
  },
  {
    name: "State Management",
    skills: [
      {
        name: "Mobx",
        src: "/skills/mobx.svg",
      },
      {
        name: "Redux",
        src: "/skills/redux.svg",
      },
      {
        name: "Tanstack Query",
        src: "/skills/tanstack-query.png",
      },
      {
        name: "Recoil",
        src: "/skills/recoil.png",
      },
    ],
  },
  {
    name: "Styling",
    skills: [
      {
        name: "Styled-components",
        src: "/skills/styled-components.svg",
      },
      {
        name: "TailwindCSS",
        src: "/skills/tailwind.svg",
      },
      {
        name: "Emotion",
        src: "/skills/emotion.png",
      },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", src: "/skills/jest.png" },
      { name: "Cypress", src: "/skills/cypress.webp" },
      { name: "Cucumber", src: "/skills/cucumber.png" },
    ],
  },
];
