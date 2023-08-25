import {
  FaAtlas,
  FaBriefcase,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IPortfolioItem } from "components/AboutMe/types";

export const portfolio: IPortfolioItem[] = [
  {
    category: "تحصیلات",
    icon: FaGraduationCap,
    image: {
      src: "/img/about-me-eduction.png",
      alt: "Picture of the author",
    },
    description: "در این بخش، تحصیلات من در حوزه روانشناسی را ذکر می‌کنم.",

    records: [
      {
        id: 1,
        title: "دکترای روانشناسی سلامت",
        date: "۳ سال پیش",
      },
      {
        id: 2,
        title: "کارشناسی ارشد روانشناسی بالینی",
        date: "۳ سال پیش",
      },
      {
        id: 3,
        title: "کارشناسی روانشناسی عمومی",
        date: "۳ سال پیش",
      },
    ],
  },

  {
    category: "تجربه",
    icon: FaBriefcase,
    image: {
      src: "/img/about-me-experience.png",
      alt: "Picture of the author",
    },
    description:
      "در این بخش، کارگاه‌ها و آموزش‌های حضوری و آنلاین که شرکت کرده‌ام را ذکر می‌کنم.",

    records: [
      {
        id: 1,
        title: "دانشگاه آزاد",
        date: "از ۱۳۹۵ تاکنون",
      },
      {
        id: 2,
        title: "دانشگاه علوم انسانی",
        date: "از ۱۳۹۸ تا ۱۴۰۰",
      },
      {
        id: 3,
        title: "مرکز روانشناسی و مشاوره شادی",
        date: "از ۱۳۹۴ تا ۱۳۹۷",
      },
      {
        id: 4,
        title: "کمپانی بهبود عملکرد شخصیت",
        date: "از ۱۴۰۱ تاکنون",
      },
      {
        id: 5,
        title: "دانشگاه پژوهشی علوم رفتاری",
        date: "از ۱۳۹۶ تا ۱۳۹۸",
      },
    ],
  },
  {
    category: "کارگاه‌ها",
    icon: FaChalkboardTeacher,
    image: {
      src: "/img/about-me-workshops.png",
      alt: "Picture of the author",
    },
    description:
      "در این بخش، کارگاه‌ها و آموزش‌های حضوری و آنلاین که شرکت کرده‌ام را ذکر می‌کنم.",

    records: [
      {
        id: 1,
        title: "رواندرمانی وجودی (اگزیستانسیال)",
        date: "۳ سال پیش",
      },
      {
        id: 2,
        title: "رواندرمانی اگزیستانسیال و پدیدارشناسی",
        date: "۳ سال پیش",
      },
      {
        id: 3,
        title: "روانپویشی کوتاه مدت (ISTDP)",
        date: "۳ سال پیش",
      },
      {
        id: 4,
        title: "سکس تراپی و سکسولوژی",
        date: "۳ سال پیش",
      },
      {
        id: 5,
        title: "تحلیل رفتار متقابل ۱۰۱ (TA)",
        date: "۳ سال پیش",
      },
      {
        id: 6,
        title: "درمان مبتنی بر پذیرش و تعهد (اکت)",
        date: "۳ سال پیش",
      },
    ],
  },
];
