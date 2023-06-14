import { ChevronLeft, ChevronRight, HeartIcon } from "components/Icons";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center font-bold text-lg tracking-wide text-white hover:opacity-75"
      >
        <ChevronRight />
        {/*<span className={"mx-1 text-red-200"}>دکتر خادم</span>*/}
        <HeartIcon />
        <ChevronLeft />
      </Link>
    </div>
  );
}
