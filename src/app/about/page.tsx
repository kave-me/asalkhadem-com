import Image from "next/image";

export default function Home() {
  return (
    <main id="page-content" className="flex flex-auto flex-col max-w-full">
      <div className="bg-gray-100">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600 mb-5 hi-outline hi-code inline-block w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              We are <span className="font-light">TechCode</span>
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium lg:w-1/2 text-gray-600">
              A passionate team who are here to help you code and build your
              business using powerful tools.
            </h3>
          </div>

          <div className="flex space-x-2">
            <div>
              <img
                src="https://source.unsplash.com/gMsnXqILjp4/1280x800"
                alt="Featured Image"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/c3tNiAb098I/600x800"
                alt="Featured Image"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-500 hi-solid hi-heart inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Passion</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We are passionate with what we do and love crafting products
                that can make your life easier and help you succeed. We pay
                attention to small details and always aiming for the best.
              </p>
            </div>
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500 hi-solid hi-arrow-down inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Commitment</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We are committed to our work and stand by our projects. Our aim
                is to improve them in every update and offer the most
                full-featured packages with the smallest possible footprint.
              </p>
            </div>
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-500 hi-solid hi-cube-transparent inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Less is More</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                We believe that design should be invisible and enhance the user
                experience, not get in the way. This gives room for your content
                to breath and attracts your users’ attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
