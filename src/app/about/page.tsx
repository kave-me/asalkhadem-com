import { LegacyAboutMeSection } from "components/AboutMe";
import { DraftAboutMeSection } from "components/Testimonial/DraftAboutMe";
import React from "react";

export default function About() {
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <div className="bg-gray-900">
        <div className="container mx-auto space-y-8 border-x-2 border-dashed border-gray-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900  px-4 py-16 lg:px-8 lg:pb-32 lg:pt-12 xl:max-w-7xl">
          <h2 className="mb-16 py-6 text-center text-3xl font-extrabold text-gray-100 md:text-4xl  ">
            سلام، عسل خادم هستم
            <br />
            <span className="text-indigo-600">روانشناس</span> و{" "}
            <span className="text-indigo-600">روان‌درمانگر</span>
            <br />
            عضو سازمان نظام روانشناسی
          </h2>
          <p className="mx-auto my-20  max-w-prose rounded bg-gray-800 p-8 pb-20 text-sm leading-10 text-gray-200 shadow ">
            دکتری روانشناسی سلامت
            <br />
            کارشناسی ارشد روانشناسی بالینی
            <br />
            کارشناسی روانشناسی عمومی
            <br />
            مهمترین کارگاه هایی که گذراندم: رواندرمانی وجودی (اگزیستانسیال)
            <br />
            رواندرمانی اگزیستانسیال و پدیدارشناسی روانپویشی کوتاه مدت (ISTDP)
            <br />
            سکس تراپی و سکسولوژی
            <br />
            تحلیل رفتار متقابل ۱۰۱ (TA)
            <br />
            درمان مبتنی بر پذیرش و تعهد (اکت)
            <br />
          </p>
          <h3 className=" border-t-2 border-gray-600/30 py-6 text-center text-3xl font-semibold text-gray-200 md:leading-relaxed">
            خدمات تخصصی{" "}
          </h3>

          {/*<h3 className="text-center text-xl font-black text-gray-200 md:leading-relaxed">*/}
          {/*  رواندرمانی فردی*/}
          {/*</h3>*/}
          <p className="mx-auto mt-4 max-w-prose rounded bg-gray-800 p-8 text-sm  leading-10 text-gray-200 shadow ">
            <ul>
              <li className={"font-semibold"}> رواندرمانی فردی:</li>
              <li className={" pr-4 text-xs"}>اضطراب و افسردگی</li>

              <li className={"pb-4 pr-4 text-xs"}>
                احساس پوچی و بی هدفی (خلاء وجودی)
              </li>
              <li className={"font-semibold"}>رواندرمانی بین فردی و رابطه</li>
              <li className={"font-semibold"}>گروه درمانی اگزیستانسیال</li>
            </ul>
          </p>
          <h3 className="pt-10 text-center text-xl font-black text-gray-200 md:leading-relaxed">
            رویکرد درمانی
          </h3>
          <p className="mx-auto mt-4 max-w-prose rounded bg-gray-800 p-8 text-sm  leading-10 text-gray-200 shadow ">
            <ul>
              <li className={"font-semibold"}> روان درمانی اگزیستانسیال</li>
            </ul>
          </p>
        </div>

        <DraftAboutMeSection />
        {/*<LegacyAboutMeSection />*/}
      </div>
    </main>
  );
}

function VideoAboutMe() {
  return (
    <iframe
      className="rounded-lg shadow-lg"
      width="640"
      height="360"
      sandbox="allow-scripts allow-same-origin"
      src="https://www.aparat.com/video/video/embed/videohash/3PcVm/vt/frame?isamp"
      title="من کی هستم"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
