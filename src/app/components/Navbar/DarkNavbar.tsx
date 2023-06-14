function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgba(255, 0, 0, 0.5)"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-red-400 animate-pulse hover:text-red-600 transition-colors duration-500 hover:scale-110 active:scale-95 saturate-150"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export const DarkNavbar = () => {
  return (
    <header id="page-header" className="flex flex-none items-center py-10">
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <div>
          <a
            href="#"
            className="inline-flex items-center font-bold text-lg tracking-wide text-white hover:opacity-75"
          >
            {/*<HeartIcon />*/}
            <ChevronRight />
            <span className={"mx-1 text-red-200"}>دکتر خادم</span>
            <HeartIcon />
            <ChevronLeft />
          </a>
        </div>
        <nav className=" flex gap-4 sm:gap-6 ">
          <a
            href="#"
            className="font-semibold text-gray-300 hover:text-gray-400"
          >
            <span>مشاوره فردی</span>
          </a>
          <a
            href="#"
            className="font-semibold text-gray-300 hover:text-gray-400"
          >
            <span>تست اضطراب</span>
          </a>
          <a
            href="#"
            className="font-semibold text-gray-300 hover:text-gray-400"
          >
            <span>درباره من</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
