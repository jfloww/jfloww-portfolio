// layout.tsx
"use client";
import "./globals.css";
import Header from "./components/templates/MainHeader";
import Footer from "./components/templates/MainFooter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import { useMobileCheck } from "./components/functions/mobileCheck";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // 커스텀 훅을 최상위에서 호출합니다.
  const mobile = useMobileCheck();
  const [fontFamily, setFontFamily] = useState("cursive");

  useEffect(() => {
    setFontFamily(mobile ? "sans-serif" : "cursive");
  }, [mobile]);

  return (
    <html lang="en">
      <head>
        <title>jfloww</title>
        <link rel="icon" href="/icons/jfloww.png" sizes="any" />
      </head>
      <body
        className="bg-white dark:bg-black text-black dark:text-white flex flex-col min-h-screen min-w-screen"
        style={{ fontFamily }}
      >
        <SpeedInsights />
        <Header mobile={mobile} />
        {mobile ? (
          <main
            className="flex-grow m-auto w-full flex py-4"
            data-mobile={mobile}
          >
            {children}
          </main>
        ) : (
          <main
            className="flex-grow m-auto w-2/3 flex py-4"
            data-mobile={mobile}
          >
            {children}
          </main>
        )}
        <Footer mobile={mobile} />
      </body>
    </html>
  );
}
