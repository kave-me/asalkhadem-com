import { DarkHero } from "components/Hero/DarkHero";

import { VideoModal } from "components/Hero/VideoModal";
import React from "react";

export function Hero() {
  return (
    <>
      <DarkHero />l
      <VideoModal video={"videoSrc"} videoWidth={1920} videoHeight={1080} />
    </>
  );
}
