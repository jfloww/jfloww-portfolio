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
  const mobile = useMobileCheck();
  const [fontFamily, setFontFamily] = useState("cursive");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setFontFamily(mobile ? "sans-serif" : "cursive");
  }, [mobile]);

  return (
    <html lang="en" className="dark">
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
        <main
          className={`flex-grow m-auto ${
            mobile ? "w-full" : "w-2/3"
          } flex py-4`}
          data-mobile={mobile}
        >
          {children}
        </main>
        <Footer mobile={mobile} />
      </body>
    </html>
  );
}
