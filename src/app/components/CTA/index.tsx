import { BOOKING_CONTACT, SOCIAL_MEDIA_CONTACT } from "data/social-media-icons";

export function LandingCta() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            همین الان امتحان کنید
            <br />
            <span className="text-indigo-500">بدون نیاز به ثبت نام</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            برای مشاوره نیازی به ثبت نام ندارید. فقط کافیه روی یکی از دکمه زیر
            کلیک کنید و با من در ارتباط باشید.
            <span className="animate-pulse">💓</span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={BOOKING_CONTACT[0].href}
              className="rounded-md bg-green-500 px-5 py-2.5 text-lg font-black text-gray-100 shadow-lg hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
            >
              رزرو وقت
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"*/}
            {/*>*/}
            {/*  رزرو وقت*/}
            {/*</a>*/}
            {/*<a href="#" className="text-sm font-semibold leading-6 text-white">*/}
            {/*  Learn more <span aria-hidden="true">→</span>*/}
            {/*</a>*/}
            <a
              className={`${SOCIAL_MEDIA_CONTACT[0].iconColor.normal} hover:${SOCIAL_MEDIA_CONTACT[0].iconColor.hover}`}
              href={SOCIAL_MEDIA_CONTACT[0].href}
              target="_blank"
              rel="noreferrer"
            >
              {SOCIAL_MEDIA_CONTACT[0].icon}
            </a>
            {SOCIAL_MEDIA_CONTACT.map((item, index) => (
              <a
                className={`${item.iconColor.normal} hover:${item.iconColor.hover}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.href + index}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
