import { classNames } from "components/AboutMe/classNames";

interface ITestimonialCard {
  quote: string;
  name: string;
  time: string;
  blur?: boolean;
}

export function TestimonialCard({
  blur = false,
  name,
  quote,
  time,
}: ITestimonialCard) {
  return (
    <div
      className={classNames(
        "relative rounded bg-white px-6 pb-6 pt-14 shadow md:px-8 md:pb-6",
        blur
          ? " blur-[8px] filter last-of-type:blur-xl last-of-type:md:blur-[8px] "
          : ""
      )}
    >
      <div className="absolute right-0 top-0 mr-5 mt-2 font-serif text-8xl text-gray-200 opacity-75">
        “
      </div>
      <div className="relative h-full">
        <blockquote className="flex h-full flex-col items-start justify-between ">
          <p className=" mb-4 line-clamp-none text-[14px] font-medium leading-8 text-gray-700 drop-shadow-sm">
            {quote}
          </p>
          <footer className="flex items-center gap-4 md:-mb-1 md:-mr-2.5 ">
            <span className="h-12 w-12 overflow-hidden rounded-full  border-2 border-gray-100 bg-gray-50">
              <svg
                className=" h-full w-full text-gray-300 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div>
              <p className="mb-1 text-sm font-semibold text-blue-600 opacity-80 hover:text-blue-400 ">
                {name}
              </p>
              <p className="text-xs font-light text-gray-400 opacity-80 ">
                {time}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export interface TestimonialCardProps {
  show?: number;
}
