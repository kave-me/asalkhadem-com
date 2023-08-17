import { projectNavMap } from "config/NavItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const currentRoute = usePathname();
  return (
    <div className="grow-1 container mx-auto  mt-10 flex w-full flex-col space-y-1 bg-blue-400/5  px-10 py-2 text-center text-gray-100 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 xl:max-w-7xl">
      <nav>
        <ol className="flex items-center justify-center sm:justify-start">
          <li>
            <Link href="/" className="text-gray-300 hover:text-gray-400">
              خانه
            </Link>
          </li>
          <li className="flex rotate-180 items-center px-1 opacity-25 sm:px-2">
            <svg
              className="hi-solid hi-chevron-right inline-block h-6 w-6"
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
            <span className="cursor-pointer select-none text-gray-300 hover:text-gray-400">
              {projectNavMap.get(currentRoute.split("/")[1])}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
