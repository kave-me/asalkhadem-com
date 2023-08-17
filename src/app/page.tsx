"use client";
import React from "react";
import { AboutMeSection } from "components/AboutMe";
import { DarkHero } from "components/Hero/DarkHero";
import { EssenceAndExistenceSection } from "components/JoinCommunity";
import { VideoIntroToExistentialism } from "components/OfferCTA/VideoIntroToExistentialism";
import { TestimonialSection } from "components/HomePage/Testimonial";
import { FaqSection } from "components/FAQ";
import { HavingDoubt } from "components/OfferCTA/HavingDoubt";
import { DontNeedSection } from "components/NewsLetter/dontNeedSection";
import { ModalVideo } from "components/modalVideo";
import { ContactMeSection } from "components/ContactMe/ContactMeSection";

// async function getData() {
//   const res = await fetch(
//     "https://www.aparat.com/etc/api/video/videohash/rzKus",
//     {
//       mode: "no-cors",
//     }
//   ).catch((err) => {
//     console.log(err);
//     throw new Error("Failed to fetch data");
//   });
// }

export default function Home() {
  // const [videoSrc, setVideoSrc] = React.useState<string>("");
  // const tmp = getData();
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <DarkHero />
      {/* Hero image */}
      <ModalVideo video={"videoSrc"} videoWidth={1920} videoHeight={1080} />
      <AboutMeSection />
      <TestimonialSection />
      <ContactMeSection />
      <FaqSection />
      <HavingDoubt />
      <VideoIntroToExistentialism />
      {/*<PsychologyTest/>*/}
      <DontNeedSection />
      <EssenceAndExistenceSection />
      {/*<ContactMeSection />*/}
    </main>
  );
}
