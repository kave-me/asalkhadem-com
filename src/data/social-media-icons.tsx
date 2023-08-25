import {
  FaInstagram,
  FaPhone,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const DEFAULT_ICON_CLASSNAME = "inline-block h-5 w-5";
export const SOCIAL_MEDIA_CONTACT = [
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

export const BOOKING_CONTACT = [
  {
    icon: <FaWhatsapp className={DEFAULT_ICON_CLASSNAME} />,
    iconColor: { normal: "text-gray-400", hover: "text-green-500" },
    href: "https://pezeshkekhoob.com/doctor/51213-asal-khadem",
  },
];
