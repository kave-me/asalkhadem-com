import "./globals.css";
import { Footer } from "components/Footer";
import { Index } from "components/Navbar";
import { Vazirmatn } from "next/font/google";
import Head from "next/head";
import React from "react";
import favicon from "../../public/favicon.ico";

const vazirMatn = Vazirmatn({ subsets: ["arabic", "latin", "latin-ext"] });

export const metadata = {
  title: "دکترای تخصصی روانشناسی سلامت",
  description: "روانشناس و روان درمانگر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"}>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <body
        className={`${vazirMatn.className} mx-auto flex min-h-screen w-full flex-col bg-gray-900`}
      >
        <Index />
        {children}
        <Footer />
      </body>
    </html>
  );
}
