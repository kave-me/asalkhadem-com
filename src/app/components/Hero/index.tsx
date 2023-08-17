import Image from "next/image";
import heroImage from "../../../public/images/hero-image.jpg";
import { Navbar } from "components/Navbar";

export function Hero() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row-reverse lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="lg:flex lg:w-1/2 lg:items-center">
          <div>
            <div className="mb-2 inline-flex rounded bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-700">
              New dashboard is live!
            </div>
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              Premium leads for all your SaaS projects
            </h2>
            <h3 className="text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed">
              Focus on building your amazing service and we will do the rest. We
              grew more than 10,000 online businesses.
            </h3>
            <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-6 py-4 font-semibold leading-6 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700"
              >
                <span>Join us today</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-arrow-right inline-block h-5 w-5 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-2 rounded border border-gray-200 bg-gray-200 px-6 py-4 font-semibold leading-6 text-gray-700 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-gray-200 active:bg-gray-200"
              >
                <span>Start a 30-day trial</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:mr-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="relative lg:w-96">
            <div className="absolute left-0 top-0 h-48 w-32 -translate-x-16 -translate-y-12 -rotate-3 transform text-indigo-100 pattern-dots-xl md:h-96"></div>
            <div className="absolute bottom-0 right-0 h-48 w-32 translate-x-16 translate-y-12 rotate-3 transform text-indigo-100 pattern-dots-xl md:h-96"></div>
            <div className="absolute right-0 top-0 -mr-12 -mt-12 h-32 w-32 rounded-full bg-yellow-200 bg-opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rotate-3 transform rounded-xl bg-blue-200 bg-opacity-50"></div>
            <Image
              src={heroImage}
              alt="Hero Image"
              className="relative mx-auto rounded-lg shadow-lg"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
