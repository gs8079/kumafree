import type { Metadata } from "next";
import { Nunito, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const display = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "2027 한국영상대 영상자율전공학과 신입생 모집안내",
  description:
    "너의 미래를 자유롭게 그려봐! 입학 후 전공학과 선택과 교과목 설계가 자유로운 한국영상대학교 영상자율전공학과.",
  openGraph: {
    title: "2027 한국영상대 영상자율전공학과 신입생 모집안내",
    description:
      "자유로운 수업 설계로 전공을 결정하는 3년제. 교과 100% 전형.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${display.variable} ${sans.variable}`}>
      <body className="relative min-h-screen bg-[#fff7fb] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
