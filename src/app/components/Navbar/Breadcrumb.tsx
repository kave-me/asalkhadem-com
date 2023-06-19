import { projectNavMap } from "config/NavItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const currentRoute = usePathname();
  return (
    <div className="space-y-1 text-gray-100 grow-1  flex flex-col text-center sm:flex-row sm:items-center sm:justify-between  sm:space-y-0 container xl:max-w-7xl mx-auto mt-10 px-10 py-2 w-full bg-blue-400/5">
      <nav>
        <ol className="flex items-center justify-center sm:justify-start">
          <li>
            <Link href="/" className="text-gray-300 hover:text-gray-400">
              خانه
            </Link>
          </li>
          <li className="flex items-center px-1 sm:px-2 opacity-25 rotate-180">
            <svg
              className="hi-solid hi-chevron-right inline-block w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-400 cursor-pointer select-none">
              {projectNavMap.get(currentRoute.split("/")[1])}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
