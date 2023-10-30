// import { except } from "utils/except";

import { except } from "utils/except";

export interface iNavitem {
  route: string;
  description: string;
}

export const NAVITEMS: iNavitem[] = [
  {
    route: "consultation",
    description: "مشاوره",
  },
  {
    route: "anxiety-test",
    description: "تست‌اضطراب",
  },
  {
    route: "gallery",
    description: "گالری‌تصاویر",
  },
  {
    route: "group-therapy",
    description: "گروه‌درمانی",
  },
  {
    route: "about",
    description: "درباره‌من",
  },
  {
    route: "contact",
    description: "تماس‌با‌من",
  },
];
const x = except(NAVITEMS);
export const HEADER_NAV_ITEMS = x(["gallery", "contact"]);
export const FOOTER_NAV_ITEMS = x([
  "gallery",
  "group-therapy",
  "about",
  "contact",
]);
