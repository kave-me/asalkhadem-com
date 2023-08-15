import "./globals.css";
import { Footer } from "components/Footer";
import { DarkNavbar } from "components/Navbar/DarkNavbar";
import { Vazirmatn} from "next/font/google";
import Head from "next/head";

const vazirMatn = Vazirmatn(
  {subsets:["arabic", "latin", "latin-ext"]}
)


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
      <link rel='icon' href='/favicon.ico'/>
    </Head>
      <body
        className={`${vazirMatn.className} flex flex-col mx-auto w-full min-h-screen bg-gray-900`}
      >
        <DarkNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
