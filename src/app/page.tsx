"use client";
import React from "react";
import { DarkHero } from "components/Hero/DarkHero";
import { VideoModal } from "components/Hero/VideoModal";

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
  // className="flex max-w-full flex-auto flex-col bg-gray-100 "
  return (
    <main
      id="page-content"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      <DarkHero />
      {/* Hero image */}
      <VideoModal video={"videoSrc"} videoWidth={1920} videoHeight={1080} />
      {/*  <AboutMeSection />*/}
      {/*<TestimonialSection />*/}
      {/*<ContactMeSection />*/}
      {/*<FaqSection />*/}
      {/*<HavingDoubt />*/}
      {/*<VideoIntroToExistentialism />*/}
      {/*<PsychologyTest/>*/}
      {/*<DontNeedSection />*/}
      {/*<EssenceAndExistenceSection />*/}
      {/*<ContactMeSection />*/}
    </main>
  );
}
