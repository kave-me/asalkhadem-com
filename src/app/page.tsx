import { CTA } from "components/CTA";
import { FAQ } from "components/FAQ";
import { Features } from "components/Features";
import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { DarkHero } from "components/Hero/DarkHero";

export default function Home() {
  return (
    <main id="page-content" className="flex flex-auto flex-col max-w-full">
      {/*<Hero />*/}
      <DarkHero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
