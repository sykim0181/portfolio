type ProjectType = "PERSONAL" | "TEAM" | "WORK";

export const PROJECT_DATA: {
  id: number;
  name: string;
  imgSrc: string;
  type: ProjectType;
}[] = [
  {
    id: 9,
    name: "BIZKET",
    imgSrc: "/projects/bizket.png",
    type: "TEAM",
  },
  {
    id: 8,
    name: "Retro-Board",
    imgSrc: "/projects/retro-board.png",
    type: "PERSONAL",
  },
  {
    id: 7,
    name: "포트폴리오",
    imgSrc: "/projects/my-portfolio.png",
    type: "PERSONAL",
  },
  {
    id: 5,
    name: "GAIA Office 선 도형 기능 고도화",
    imgSrc: "/projects/advancing-connector.gif",
    type: "WORK",
  },
  {
    id: 6,
    name: "GAIA Office 기능 유지 보수",
    imgSrc: "/projects/gaia-office.png",
    type: "WORK",
  },
  {
    id: 1,
    name: "music-archiving",
    imgSrc: "/projects/music-archiving.gif",
    type: "PERSONAL",
  },
  {
    id: 2,
    name: "이커머스 플랫폼",
    imgSrc: "/projects/xso.webp",
    type: "PERSONAL",
  },
  {
    id: 3,
    name: "Aiku",
    imgSrc: "/projects/aiku.webp",
    type: "TEAM",
  },
  {
    id: 4,
    name: "SyncSchedule",
    imgSrc: "/projects/sync-schedule.webp",
    type: "TEAM",
  },
];
