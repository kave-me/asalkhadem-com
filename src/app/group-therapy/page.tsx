import { DraftAboutMeSection } from "components/Testimonial/DraftAboutMe";
import { LandingCta } from "components/CTA";
import React from "react";

export default function AnxietyTest() {
  return (
    <main id="page-content" className="flex max-w-full flex-auto flex-col">
      <div className="bg-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div>
            <h2 className="mb-6 max-w-prose text-center text-3xl font-extrabold md:text-4xl">
              <span className="font-light">
                گروه درمانی با رویکرد اگزیستانسیال
              </span>
              <br />
              برای کاهش اضطراب و افسردگی
            </h2>
            <h5 className="mx-auto text-center text-lg font-bold text-gray-700 md:text-xl md:leading-relaxed lg:max-w-prose">
              تعداد اعضا ۱۰ نفر
              <br />
              تعداد جلسات ۱۰ جلسه ی ۱۲۰ دقیقه ای
              <br />
              <br />
              <br />
              گروه درمانی این فرصت را فراهم می کند تا:
            </h5>
            <h4 className="mx-auto  text-lg  text-gray-600  md:leading-relaxed lg:max-w-prose">
              بسیاری از افرادی که به دنبال درمان اند از وضعیت خود در زندگی
              ناراضی اند و ممکن است در ایجاد و حفظ رابطه ای نزدیک و معنی دار با
              دیگران دچار مشکل باشند غالبا مایلند درباره چگونگی برقراری ارتباط
              با دیگران بیشتر بدانند.
            </h4>
          </div>
          <div className="mx-auto flex items-center justify-center gap-2 ">
            <div>
              <img
                src="img/about-me-eduction.png"
                alt="تعدادی کتاب به عنوان نمادی از علم روانشناسی"
                className="aspect-[16/12] max-w-md origin-center rounded-lg object-cover object-top "
              />
            </div>
            <div>
              <img
                src="img/about-me-workshops.png"
                alt="یادداشت برداری به عنوان نمادی از علم روانشناسی"
                className="aspect-[16/12] max-w-md origin-center rounded-lg object-cover object-left-bottom "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div>
              <h3 className="mb-2 flex items-center justify-center gap-2 text-center text-lg font-bold uppercase tracking-wide">
                <span>حمایت</span>
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 ">
                بتوانید حمایت و باز خورد را بگیرید و بدهید.
                <ul className={"space-y-4"}>
                  <li> رابطه بین فردی و ارتباط را بهبود بخشید.</li>
                  <li> رفتارهای بین فردی جدید را تجربه کنید.</li>
                  <li> درباره احساسات خود صادقانه و مستقیما حرف بزنید.</li>
                </ul>
              </p>
            </div>
            <div>
              <h3 className="mb-2 flex items-center justify-center gap-2 text-lg font-bold uppercase tracking-wide">
                <span>بینش</span>
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                <ul className={"space-y-4"}>
                  <li>
                    درباره افکار، احساسات و رفتارها به درک و بینشی دست یابید،
                    بدین ترتیب که به الگوهای رابطه ای در درون گروه و بیرون از
                    گروه نگاه کنید.
                  </li>
                  <li>
                    در مورد افکار، احساسات و رفتارهای افراد دیگر به درکی دست
                    یابید.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h3 className="mb-2 flex items-center justify-center gap-2 text-lg font-bold uppercase tracking-wide">
                <span>رشد</span>
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                <ul className={"space-y-2"}>
                  <li>
                    در گروه تغییرات شخصی می کنید و انتظار می رود که این یادگیری
                    را بتوانید به خارج از گروه انتقال دهید.
                  </li>
                  <li>
                    اعتماد به نفس، تصور از خود و عزت نفس را در خود افزایش دهید.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center gap-2 ">
            <div>
              <img
                src="img/about-me-experience.png"
                alt="دو نفر در حال آغوش گرفتن یکدیگر بعد از گروه درمانی"
                className="aspect-[16/8] max-w-2xl origin-center rounded-lg object-cover object-top"
              />
            </div>
          </div>
          <h3 className="mx-auto  pt-20 text-center text-xl font-black text-gray-700 md:text-2xl md:leading-relaxed lg:max-w-prose">
            {" "}
            اینجا و اکنون
          </h3>
          <p className="  text-md   text-gray-600 md:leading-relaxed ">
            گروه درمانی اگزیستانسیال مانند درمان فردی بدون ساختار است. هیچ
            برنامه تجویز شده ای برای هر جلسه وجود ندارد.
            <br />
            شرکت کنندگان تشویق می شوند تا درباره مشکلات شخصی یا روابطی که مربوط
            به مشکلات و اهدافی است که آنان را به درمان کشانده است حرف بزنند.
            <br />
            شرکت کنندگان تشویق می شوند که حمایت کنند، سؤال کنند و درباره آنچه
            گفته شده یا ناگفته مانده فکر کنند و افکار و احساسات خود را بیان
            کنند.
            <br />
            بر روابط بین اعضا تاکید بسیاری می شود - یعنی{" "}
            <span className="font-bold">بر اینجا و اکنون.</span>
          </p>
        </div>
      </div>
      <LandingCta />
    </main>
  );
}
