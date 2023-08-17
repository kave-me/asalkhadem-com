"use client";
import React from "react";
import { AboutMeSection } from "components/AboutMe";
import { DarkHero } from "components/Hero/DarkHero";
import { EssenceAndExistenceSection } from "components/JoinCommunity";
import { VideoIntroToExistentialism } from "components/OfferCTA/VideoIntroToExistentialism";
import { TestimonialSection } from "components/HomePage/Testimonial";
import { FaqSection } from "components/FAQ";
import { HavingDoubt } from "components/OfferCTA/HavingDoubt";
import favicon from "../../public/favicon.ico";
import {
  FaInstagram,
  FaPhone,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { NewsLetterSection } from "components/NewsLetter/newsLetterSection";
import { ModalVideo } from "components/modalVideo";

function ContactMeSection() {
  return (
    <section className="bg-gray-100 py-16  ">
      <div
        className={`container mx-auto max-w-max space-y-10 border-2 border-dashed border-indigo-200 bg-indigo-100  px-4 py-16 lg:px-8 lg:py-32  `}
      >
        <div className="text-center">
          <p className="mb-10  text-sm  font-bold text-blue-700 opacity-80  ">
            تماس با من
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-6 text-3xl font-extrabold md:text-4xl">
            تمایل دارید با من در ارتباط باشید؟
          </h3>
          <p className="mx-auto  pb-16 text-base font-medium text-gray-600 md:leading-relaxed lg:w-2/3">
            می‌توانید از طریق پیام کوتاه و شبکه‌های اجتماعی زیر با من در ارتباط
            باشید.
          </p>

          <ul className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-5 rounded-lg bg-teal-200 bg-opacity-30 p-8 text-center text-6xl  shadow ">
            <li className="inline-block">
              <a
                href="https://wa.me/00989389194334"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-6xl text-green-400 drop-shadow hover:scale-105 hover:text-green-600 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="https://t.me/asalkhadem"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-6xl text-fuchsia-500 drop-shadow hover:scale-105 hover:text-fuchsia-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="https://t.me/asalkhadem"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="text-6xl text-blue-400 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="skype:live:.cid.4631ac0e43848cd6?chat"
                target="_blank"
                rel="noreferrer"
              >
                <FaSkype className="text-6xl text-blue-400/90 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a href="tel:00989201425226" target="_blank" rel="noreferrer">
                <FaPhone className="text-6xl text-blue-400 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a href="tel:00989389194334" target="_blank" rel="noreferrer">
                <FaPhone className="text-6xl text-green-400 drop-shadow hover:scale-105 hover:text-green-500 " />
              </a>
            </li>
          </ul>
          <QRCodeSVG
            className={"mx-auto mt-24 rounded shadow-lg"}
            value={"tel:00989389194334"}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            imageSettings={{
              src: favicon.src,
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}

async function getData() {
  const res = await fetch(
    "https://www.aparat.com/etc/api/video/videohash/rzKus",
    {
      mode: "no-cors",
    }
  ).catch((err) => {
    console.log(err);
    throw new Error("Failed to fetch data");
  });
}

export default function Home() {
  const [videoSrc, setVideoSrc] = React.useState<string>("");
  const tmp = getData();
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <DarkHero />
      {/* Hero image */}
      <ModalVideo video={videoSrc} videoWidth={1920} videoHeight={1080} />
      <AboutMeSection />
      <FaqSection />
      <TestimonialSection />
      <ContactMeSection />
      <VideoIntroToExistentialism />
      {/*<PsychologyTest/>*/}
      <HavingDoubt />
      <NewsLetterSection />
      <EssenceAndExistenceSection />
    </main>
  );
}
