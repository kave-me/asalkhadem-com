"use client";
import { Breadcrumb } from "components/Navbar/Breadcrumb";
import { NavbarLogo } from "components/Navbar/NavbarLogo";
import { navItemMap } from "components/Navbar/NavItemMap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DarkNavbar = () => {
  const currentRoute = usePathname();

  return (
    <header
      id="page-header"
      className="flex flex-none items-center py-10 flex-wrap"
    >
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10 w-full ">
        <NavbarLogo />
        <nav className=" flex gap-4 sm:gap-6">
          {Array.from(navItemMap).map(([href, title]) => (
            <Link
              href={href}
              key={href}
              className="font-semibold text-gray-300 hover:text-gray-400"
            >
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </div>
      {currentRoute !== "/" && <Breadcrumb />}
    </header>
  );
};
