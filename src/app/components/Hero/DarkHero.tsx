import Link from "next/link";
import { GRADIENT } from "utils/gradient";

function HeroDescription() {
  return (
    <h2 className="mb-24 mt-10 text-center text-lg font-medium text-indigo-200 md:text-2xl md:leading-tight">
      <span>دکترای تخصصی روانشناسی سلامت</span>
      <br />
      روانشناس و روان درمانگر
    </h2>
  );
}

export const DarkHero = () => {
  const H1 = "عسل خادم";
  return (
    <div className={GRADIENT}>
      <div className="container mx-auto flex min-h-screen  flex-col items-stretch justify-center overflow-hidden rounded-lg bg-gray-800 px-4 py-16 text-center  shadow-2xl shadow-indigo-600/10 lg:flex-row lg:px-8 lg:py-32 lg:text-right xl:max-w-7xl">
        <div className="relative z-10 p-4 pb-20 md:min-h-max lg:flex lg:w-1/2 lg:items-center ">
          <div>
            <h1 className=" text-5xl font-black leading-tight tracking-tight text-gray-50  md:text-6xl ">
              دکتر <span className="text-indigo-300">{H1}</span>
            </h1>
            <HeroDescription />
            <div className="flex snap-always flex-col flex-wrap justify-center gap-5 pb-10 md:flex-row ">
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 rounded border border-gray-700 bg-gray-700 px-6 py-4 font-semibold leading-6 text-white hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-gray-700 active:bg-gray-700"
              >
                <span>درباره من</span>
              </Link>
              <a
                href="https://pezeshkekhoob.com/doctor/51213-asal-khadem"
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-6 py-4 font-semibold leading-6 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700"
                rel="noopener noreferrer"
              >
                <span className={"px-2"}>دریافت نوبت</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center  ">
          <div className="relative mx-5 lg:w-96">
            <div className="absolute left-0 top-0 z-0 h-48 w-32 -translate-x-16 -translate-y-12 -rotate-3 scale-[800%] transform text-green-500 opacity-20 blur-xl saturate-150 filter duration-500 pattern-dots-xl md:h-96 "></div>
            <div className="absolute left-0 top-0 h-48 w-32 -translate-x-16 -translate-y-12 -rotate-3 transform text-indigo-800 pattern-dots-xl md:h-96"></div>
            <div className="absolute bottom-0 right-0 h-48 w-32 translate-x-16 translate-y-12 rotate-3 transform text-indigo-800 pattern-dots-xl md:h-96"></div>
            <div className="absolute inset-0 -m-4 rotate-2 transform rounded-xl bg-gray-600 bg-opacity-20 transition-all duration-1000 hover:rotate-3 hover:scale-110"></div>
            <div className="absolute inset-0 -m-4 -rotate-2 transform rounded-xl bg-gray-600 bg-opacity-25 mix-blend-saturation blur-sm filter transition-all duration-1000 hover:-rotate-3 hover:scale-105"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="1.png"
              alt="Doctor Asal Khadem"
              className="relative mx-auto cursor-pointer snap-center rounded-lg shadow-lg grayscale-[40%] filter transition-all duration-300 hover:scale-[102%] hover:grayscale-[25%] active:scale-95"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
