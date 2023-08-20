import { NAVITEMS } from "config/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleLeft, FaArrowLeft } from "react-icons/fa";

export function Breadcrumb() {
  const currentRoute = usePathname().replace("/", "");
  const CurrentNavItem = NAVITEMS.find((item) => item.route === currentRoute);

  return (
    <div className="grow-1 container mx-auto  mt-10 flex w-full flex-col space-y-1 bg-blue-400/5  px-10 py-2 text-center text-gray-100 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 xl:max-w-7xl">
      <nav>
        <ol className="flex items-center justify-center sm:justify-start">
          <li>
            <Link href={"/"} className="text-gray-300 hover:text-gray-200">
              خانه
            </Link>
          </li>
          <FaAngleLeft className="mx-2 h-5 w-5 text-gray-300 " />
          <li>
            <span className="cursor-pointer select-none text-gray-300 hover:text-gray-200">
              {CurrentNavItem?.description}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
