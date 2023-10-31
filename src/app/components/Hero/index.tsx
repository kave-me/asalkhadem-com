import { DarkHero } from "components/Hero/DarkHero";

import { VideoModal } from "components/Hero/VideoModal";
import React from "react";

export function Hero() {
  return (
    <>
      <DarkHero />l
      <VideoModal
        video={"video/720p.mp4"}
        videoWidth={1080}
        videoHeight={720}
      />
    </>
  );
}
