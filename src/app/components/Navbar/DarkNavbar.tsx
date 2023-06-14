import { NavbarLogo } from "components/Navbar/NavbarLogo";
import Link from "next/link";

export const DarkNavbar = () => {
  const navItems = [
    {
      title: "مشاوره فردی",
      href: "#",
    },
    {
      title: "تست اضطراب",
      href: "#",
    },
    {
      title: "درباره ما",
      href: "about",
    },
  ];
  return (
    <header id="page-header" className="flex flex-none items-center py-10">
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <NavbarLogo />
        <nav className=" flex gap-4 sm:gap-6 ">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="font-semibold text-gray-300 hover:text-gray-400"
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
