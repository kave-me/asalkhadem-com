"use client";
import { Breadcrumb } from "components/Navbar/Breadcrumb";
import { NavbarLogo } from "components/Navbar/NavbarLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_NAV_ITEMS } from "config/nav-items";
import { FaPhone } from "react-icons/fa";
import { return_if_true } from "utils/return_if_true";

export const Index = () => {
  const currentRoute = usePathname();
  return (
    <header id="page-header">
      <section
        id={"navbar-section"}
        className="container mx-auto flex flex-col flex-wrap  items-center justify-center gap-4 rounded-t p-8 pb-4 sm:flex-row sm:flex-nowrap sm:justify-between"
      >
        <NavbarLogo />
        <nav className="flex w-full items-center justify-center gap-4 sm:gap-6  md:scale-100">
          {HEADER_NAV_ITEMS.map((item) => (
            <Link
              href={item.route}
              key={item.route}
              className="font-semibold text-gray-300 hover:text-gray-400"
            >
              <span>{item.description}</span>
            </Link>
          ))}
        </nav>
        <a
          href="tel:00989389194334"
          className="min-w-fit rounded bg-green-600 px-6 py-2 text-base font-semibold text-gray-50 shadow hover:bg-green-500 "
        >
          تماس
          <FaPhone className="mr-2 inline-block h-5 w-5" />
        </a>
      </section>
      {return_if_true(() => currentRoute !== "/", <Breadcrumb />)}
    </header>
  );
};
