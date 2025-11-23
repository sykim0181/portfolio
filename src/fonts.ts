import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const pretendard = localFont({
  src: "../public/fonts/Pretendard-Regular.ttf",
});

export const sbAggroB = localFont({
  src: "../public/fonts/SB-Aggro-B.ttf",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const partialSans = localFont({
  src: "../public/fonts/PartialSansKR-Regular.otf",
});
