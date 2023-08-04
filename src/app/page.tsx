import {FAQ} from "components/FAQ";
import {Features} from "components/Features";
import {DarkHero} from "components/Hero/DarkHero";
import {JoinCommunity} from "components/JoinCommunity";
import {Testimonial} from "components/Testimonial";
import {OfferCta} from 'components/OfferCTA/OfferCTA';
import {TestCta} from 'components/TestCta/TestCta';
import {Services} from 'components/Hero/Services';

export default function Home() {
  return (
    <main id="page-content" className="flex flex-auto flex-col max-w-full">
      <DarkHero />
      <Features />
      <Services/>
      <OfferCta />
      <Testimonial />
      <FAQ />
      <JoinCommunity />
      <TestCta />
    </main>
  );
}
