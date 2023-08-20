import { DarkHero } from "components/Hero/DarkHero";

import { VideoModal } from "components/Hero/VideoModal";

export function Hero() {
  return (
    <>
      <DarkHero />
      <VideoModal video={""} videoWidth={1920} videoHeight={1080} />
    </>
  );
}
