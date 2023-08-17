import { footerNavMap } from "config/NavItems";
import Link from "next/link";
import {
  FaInstagram,
  FaPhone,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => (
  <footer id="page-footer" className="bg-white">
    <div className="container mx-auto flex flex-col space-y-6 px-4 py-16 text-center text-sm md:flex-row-reverse md:justify-between md:space-y-0 md:text-left lg:px-8 lg:py-32 lg:text-base xl:max-w-7xl">
      <nav className="flex gap-4">
        <a
          href="https://wa.me/00989389194334"
          className="text-gray-400 hover:text-green-600"
        >
          <FaWhatsapp className="inline-block h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-fuchsia-600">
          <FaInstagram className="inline-block h-5 w-5" />
        </a>
        <a
          href="https://t.me/asalkhadem"
          className="text-gray-400 hover:text-blue-600"
        >
          <FaTelegram className="inline-block h-5 w-5" />
        </a>
        <a
          href="skype:live:.cid.4631ac0e43848cd6?chat"
          className="text-gray-400 hover:text-blue-600"
        >
          <FaSkype className="inline-block h-5 w-5" />
        </a>
        <a
          href="tel:00989201425226"
          className="text-blue-400 hover:text-green-600"
        >
          <FaPhone className="inline-block h-5 w-5" />
        </a>
        <a
          href="tel:00989389194334"
          className="text-green-400 hover:text-green-600"
        >
          <FaPhone className="inline-block h-5 w-5" />
        </a>
      </nav>
      <nav className="flex gap-2 sm:gap-4">
        {Array.from(footerNavMap).map(([href, description]) => (
          <Link
            href={href}
            className="font-medium text-gray-900 hover:text-gray-500"
            key={href}
          >
            {description}
          </Link>
        ))}
      </nav>
      <div className="text-gray-600">
        © <span className="font-medium">تمام حقوق مادی و معنوی محفوظ است</span>
      </div>
    </div>
  </footer>
);
