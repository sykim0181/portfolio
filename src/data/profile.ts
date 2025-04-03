type TData = {
  category: string;
  items: {
    period: string;
    title: string;
    description: string[];
  }[];
};

export const profileData: TData[] = [
  {
    category: "Career",
    items: [
      {
        period: "2024.04 - 2025.02",
        title: "(주)티맥스가이아",
        description: [
          "문서 협업 플랫폼 GAIA Docs의 오피스(문서 편집 앱) 개발 연구원",
          "프레젠테이션(Point), 도형 관련 기능 개발 및 유지 보수",
        ],
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        period: "2019.03 - 2024.02",
        title: "건국대학교",
        description: ["컴퓨터공학부"],
      },
    ],
  },
  {
    category: "etc.",
    items: [
      {
        period: "2022.09",
        title: "정보처리기사",
        description: [],
      },
      {
        period: "2024.01",
        title: "영어 TOEIC",
        description: ["975"],
      },
    ],
  },
];
