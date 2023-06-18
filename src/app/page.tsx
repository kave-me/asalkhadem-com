import { CTA } from "components/CTA";
import { FAQ } from "components/FAQ";
import { Features } from "components/Features";
import { DarkHero } from "components/Hero/DarkHero";
import { JoinCommunity } from "components/JoinCommunity";
import { Testimonial } from "components/Testimonial";

export default function Home() {
  return (
    <main id="page-content" className="flex flex-auto flex-col max-w-full">
      <DarkHero />
      <Features />
      <Testimonial />
      <FAQ />
      <CTA />
      <JoinCommunity />
    </main>
  );
}
