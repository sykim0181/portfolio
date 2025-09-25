import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const pretendard = localFont({
  src: "./Pretendard-Regular.ttf",
});

export const sbAggroB = localFont({
  src: "./SB-Aggro-B.ttf",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const partialSans = localFont({
  src: "./PartialSansKR-Regular.otf",
});
