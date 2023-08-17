import React from "react";

export function EssenceAndExistenceSection() {
  return (
    <section className="border-y-2 border-dashed border-indigo-100 bg-white py-16">
      <div className="text-center">
        <p className="mb-10  text-sm  font-bold text-blue-700 opacity-80 ">
          اگزیستانسیالیسم
        </p>
      </div>
      <div className="container mx-auto max-w-max rounded ">
        <div className="text-center">
          <h3 className="mb-6 text-3xl font-extrabold md:text-4xl">
            «وجود» و «ماهیت» چی هستند؟
          </h3>
          <p className="mx-auto pb-16 text-base font-medium text-gray-600 md:leading-relaxed lg:w-2/3">
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
            className="hi-outline hi-annotation mb-1 inline-block h-24 w-24 text-indigo-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          <p className=" mx-auto pt-4 text-base font-black text-indigo-700 md:text-base md:leading-relaxed lg:w-2/3">
            انسان چیزی نیست جز همان که خود از خویش ساخته است و نخستین اصل، اصالت
            وجود است.
          </p>
        </div>
      </div>
    </section>
  );
}
