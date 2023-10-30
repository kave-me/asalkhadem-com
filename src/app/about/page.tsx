import { LegacyAboutMeSection } from "components/AboutMe";

export default function About() {
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <div className="bg-gray-900">
        <div className="container mx-auto space-y-8 border-x-2 border-dashed border-gray-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900  px-4 py-16 lg:px-8 lg:pb-32 lg:pt-12 xl:max-w-7xl">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-100 md:text-4xl  ">
            سلام، عسل خادم هستم
            <br />
            <span className="text-indigo-600">روانشناس</span> و{" "}
            <span className="text-indigo-600">روان‌درمانگر</span>
            <br />
          </h2>

          <h3 className="text-base font-medium text-gray-200 md:leading-relaxed">
            عضو سازمان نظام روانشناسی، اینجا هستم برای کمک به شما.
            <br />
            برای اینکه بتوانید در مواجهه با انتخابات مهم و تصمیمات زندگی
            <br />
            تحمل اضطراب و استرس کنار بیاید و با شرایط پیچیده و آشفته زندگی
            <br />
            به خوبی سازگار بشید.
            <br />
            <br />
            تو این ویدیو کمی بیشتر با هم آشنا میشیم 🥰
          </h3>
          <div className="mx-auto flex justify-center py-8">
            <VideoAboutMe />
          </div>
          <p className="mx-auto mt-4 max-w-prose rounded bg-gray-800 p-8 text-sm  leading-10 text-gray-200 shadow ">
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

          <h3 className="text-base font-medium text-gray-200 md:leading-relaxed"></h3>
        </div>
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
