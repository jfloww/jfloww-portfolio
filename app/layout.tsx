"use client";
import "./globals.css";
import Header from "./components/templates/MainHeader";
import Footer from "./components/templates/MainFooter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [fontFamily, setFontFamily] = useState("cursive");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setFontFamily("sans-serif");
        setMobile(true);
      } else {
        setFontFamily("cursive");
        setMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        {mobile && (
          <main className="flex-grow m-auto w-5/6 flex py-8">{children}</main>
        )}
        {!mobile && (
          <main className="flex-grow m-auto w-2/3 flex py-8">{children}</main>
        )}
        <Footer mobile={mobile} />
      </body>
    </html>
  );
}
