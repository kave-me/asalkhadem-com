"use client";
import React from "react";
import { Hero } from "components/Hero";
import { LegacyAboutMeSection } from "components/AboutMe";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TestimonialSection } from "components/HomePage/Testimonial";
import { ContactMeSection } from "components/ContactMe/ContactMeSection";
import { FaqSection } from "components/FAQ";
import { HavingDoubt } from "components/OfferCTA/HavingDoubt";
import { VideoIntroToExistentialism } from "components/OfferCTA/VideoIntroToExistentialism";
import { DontNeedSection } from "components/NewsLetter/dontNeedSection";
import { EssenceAndExistenceSection } from "components/JoinCommunity";
import { LandingCta } from "components/CTA";
import { DraftAboutMeSection } from "components/Testimonial/DraftAboutMe";

export default function Home() {
  const [parent, enableAnimations] = useAutoAnimate();
  React.useEffect(() => {
    enableAnimations(true);
  }, []);

  return (
    <main
      ref={parent}
      id="main-section"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 "
    >
      <Hero />
      {/*<LegacyAboutMeSection />*/}
      <LandingCta />
      <TestimonialSection />
      {/*<div className="space h-[500px] "></div>*/}
      {/*<FaqSection />*/}
      <DraftAboutMeSection />
      {/*<ContactMeSection />*/}
      {/*<HavingDoubt />*/}
      {/*<VideoIntroToExistentialism />*/}
      {/*<PsychologyTest />*/}
      {/*<DontNeedSection />*/}
      {/*<EssenceAndExistenceSection />*/}
      {/*<ContactMeSection />*/}
    </main>
  );
}
