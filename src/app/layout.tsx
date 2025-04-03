import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "김소연의 포트폴리오",
  description: "안녕하세요. 프론트엔드 개발자 김소연입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
