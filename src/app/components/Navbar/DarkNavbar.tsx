"use client";
import { Breadcrumb } from "components/Navbar/Breadcrumb";
import { NavbarLogo } from "components/Navbar/NavbarLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarItemMap } from "config/NavItems";
import {FaPhone} from 'react-icons/fa';

export const DarkNavbar = () => {
  const currentRoute = usePathname();

  return (
    <header
      id="page-header"
      className="flex flex-none items-center py-10 flex-wrap"
    >
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10 w-full flex-wrap ">
        <NavbarLogo />
        <nav className=" flex gap-4 sm:gap-6 items-center justify-center ">
          {Array.from(navBarItemMap).map(([href, title]) => (
            <Link
              href={href}
              key={href}
              className="font-semibold text-gray-300 hover:text-gray-400"
            >
              <span>{title}</span>
            </Link>
          ))}
          <a href="tel:00989389194334" className="px-6 py-2 text-base font-semibold text-gray-50 bg-green-600 rounded shadow hover:bg-green-500 ">
            تماس
            <FaPhone className="inline-block w-5 h-5 mr-2" />
          </a>
        </nav>
      </div>
      {currentRoute !== "/" && <Breadcrumb />}
    </header>
  );
};
