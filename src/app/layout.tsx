import "./globals.css";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { DarkNavbar } from "components/Navbar/DarkNavbar";
import { Inter } from "next/font/google";
import localFonts from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const iranSans = localFonts({
  src: [
    {
      path: "./assets/fonts/woff2/IRANSansX-Thin.woff2",
      weight: "100",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-Light.woff2",
      weight: "300",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-Medium.woff2",
      weight: "500",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-DemiBold.woff2",
      weight: "600",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-Bold.woff2",
      weight: "700",
    },
    {
      path: "./assets/fonts/woff2/IRANSansX-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-iran-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body
        className={`${iranSans.className} flex flex-col mx-auto w-full min-h-screen bg-gray-900`}
      >
        <DarkNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
