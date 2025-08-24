export type TDataItem = {
  period: string;
  title: string;
  description: string[];
};

export const CAREER_DATA: TDataItem[] = [
  {
    period: "2024.04 - 2025.02",
    title: "(주)티맥스가이아",
    description: ["문서 협업 플랫폼 GAIA Docs의 오피스(문서 편집 도구) 개발"],
  },
];

export const EDUCATION_DATA: TDataItem[] = [
  {
    period: "2019.03 - 2024.02",
    title: "건국대학교 컴퓨터공학부",
    description: [],
  },
  {
    period: "2024.01 - 2024.03",
    title: "항해99 리부트 코스 1기",
    description: [],
  },
  {
    period: "2025.07 - 2025.08",
    title: "부스트캠프 웹·모바일 10기 챌린지",
    description: ["웹 풀스택(JavaScript)"],
  },
];

export const ETC_DATA: TDataItem[] = [
  {
    period: "2022.09",
    title: "정보처리기사",
    description: [],
  },
  {
    period: "2024.01",
    title: "영어 TOEIC · 975",
    description: [],
  },
];
