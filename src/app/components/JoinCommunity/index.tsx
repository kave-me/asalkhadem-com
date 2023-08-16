import React from "react";

export function EssenceAndExistenceSection() {
  return (
    <section className="bg-white py-16 border-y-2 border-dashed border-indigo-100">
      <div className="text-center">
        <p className="text-sm  font-bold  mb-10 text-blue-700 opacity-80 ">
          اگزیستانسیالیسم
        </p>
      </div>
      <div className="container rounded   mx-auto max-w-max ">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            «وجود» و «ماهیت» چی هستند؟
          </h3>
          <p className="text-base  md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto pb-16">
            <span>انسان ابتدا وجود دارد و سپس خود رامی‌سازد.</span>
            <br />
            <span>انسان ابتدا چیزی نیست و بعد از آن چیزی می‌شود.</span>
            <br />
            <span>انسان ابتداوجود دارد و سپس ماهیت می‌یابد.</span>
            <br />
            <span>وجود انسان بر ماهیت او تقدم دارد.</span>
            <br />
            <span>انسان ابتدا وجود دارد و سپس خود را می‌سازد.</span>
          </p>
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-500 mb-1 hi-outline hi-annotation inline-block w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          <p className=" text-base pt-4 md:text-base md:leading-relaxed font-black lg:w-2/3 mx-auto text-indigo-700">
            انسان چیزی نیست جز همان که خود از خویش ساخته است و نخستین اصل، اصالت
            وجود است.
          </p>
        </div>
      </div>
    </section>
  );
}
