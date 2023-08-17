"use client";
import { Breadcrumb } from "components/Navbar/Breadcrumb";
import { NavbarLogo } from "components/Navbar/NavbarLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarItemMap } from "config/NavItems";
import { FaPhone } from "react-icons/fa";

export const DarkNavbar = () => {
  const currentRoute = usePathname();

  return (
    <header
      id="page-header"
      className="flex flex-none flex-wrap items-center py-10"
    >
      <div className="container mx-auto flex w-full flex-col flex-wrap space-y-6 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-10 xl:max-w-7xl ">
        <NavbarLogo />
        <nav className=" flex items-center justify-center gap-4 sm:gap-6 ">
          {Array.from(navBarItemMap).map(([href, title]) => (
            <Link
              href={href}
              key={href}
              className="font-semibold text-gray-300 hover:text-gray-400"
            >
              <span>{title}</span>
            </Link>
          ))}
          <a
            href="tel:00989389194334"
            className="rounded bg-green-600 px-6 py-2 text-base font-semibold text-gray-50 shadow hover:bg-green-500 "
          >
            تماس
            <FaPhone className="mr-2 inline-block h-5 w-5" />
          </a>
        </nav>
      </div>
      {currentRoute !== "/" && <Breadcrumb />}
    </header>
  );
};
