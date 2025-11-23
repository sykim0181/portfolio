import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "../fonts";
import "swiper/css";
import "swiper/css/pagination";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "김소연의 포트폴리오",
  description: "안녕하세요. 프론트엔드 개발자 김소연입니다.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <main id="root">
          {children}
          {modal}
        </main>
        <div id="modal-root" />
        <Analytics />
      </body>
    </html>
  );
}
