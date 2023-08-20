import { FOOTER_NAV_ITEMS } from "config/nav-items";
import Link from "next/link";
import {
  FaInstagram,
  FaPhone,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const DEFAULT_ICON_CLASSNAME = "inline-block h-5 w-5";
const SOCIAL_MEDIA_CONTACT = [
  {
    icon: <FaWhatsapp className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-gray-400", hover: "text-green-500" },
    href: "https://wa.me/00989389194334",
  },
  {
    icon: <FaInstagram className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-gray-400", hover: "text-fuchsia-500" },
    href: "https://t.me/asalkhadem",
  },
  {
    icon: <FaTelegram className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-gray-400", hover: "text-blue-600" },
    href: "https://t.me/asalkhadem",
  },
  {
    icon: <FaSkype className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-gray-400", hover: "text-blue-600" },
    href: "skype:live:.cid.4631ac0e43848cd6?chat",
  },
  {
    icon: <FaPhone className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-blue-400", hover: "text-green-600" },
    href: "tel:00989201425226",
  },
  {
    icon: <FaPhone className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-green-400", hover: "text-green-600" },
    href: "tel:00989389194334",
  },
];

export const Footer = () => (
  <footer id="page-footer" className="overflow-hidden bg-white ">
    <div className=" container mx-auto  flex flex-row-reverse flex-wrap justify-around gap-4 px-4  py-10">
      <nav className="flex flex-wrap gap-4" key={"SOCIAL_MEDIA_CONTACT"}>
        <a
          className={`${SOCIAL_MEDIA_CONTACT[0].iconColor.normal} hover:${SOCIAL_MEDIA_CONTACT[0].iconColor.hover}`}
          href={SOCIAL_MEDIA_CONTACT[0].href}
          target="_blank"
          rel="noreferrer"
        >
          {SOCIAL_MEDIA_CONTACT[0].icon}
        </a>
        {SOCIAL_MEDIA_CONTACT.map((item) => (
          <a
            className={`${item.iconColor.normal} hover:${item.iconColor.hover}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            key={item.href}
          >
            {item.icon}
          </a>
        ))}
      </nav>
      <nav
        key={"FOOTER_NAV_ITEMS"}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
      >
        {FOOTER_NAV_ITEMS.map((item) => (
          <Link
            href={item.route}
            className="min-w-fit border-l-4 border-gray-300 pl-4 font-medium text-gray-900 last:border-0  hover:text-gray-500 lg:border-transparent "
            key={item.route}
          >
            {item.description}
          </Link>
        ))}
      </nav>
      <div className="text-gray-600 ">
        © <span className="font-medium">تمام حقوق مادی و معنوی محفوظ است</span>
      </div>
    </div>
    <h4 className="group flex justify-center  pb-8 text-center text-xs font-light text-gray-400 opacity-40 hover:opacity-70   ">
      <a
        href={"https://kave.me"}
        target="_blank"
        className="rounded border-2 border-transparent px-4 py-2 leading-none drop-shadow transition-all group-hover:scale-105 group-hover:border-gray-400/30 group-hover:bg-sky-200/30 group-hover:text-gray-700 group-hover:shadow "
      >
        Developed By
        <span
          className={
            "px-1 font-bold text-blue-400 transition-all group-hover:text-blue-500 "
          }
        >
          Kave
        </span>
      </a>
    </h4>
  </footer>
);
