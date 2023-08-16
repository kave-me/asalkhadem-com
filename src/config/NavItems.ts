import { filterMap } from "utils/filterMap";

export const projectNavMap = new Map([
  ["consultation", "مشاوره"],
  ["anxiety-test", "تست اضطراب"],
  ["gallery", "گالری تصاویر"],
  ["group-therapy", "گروه درمانی"],
  ["about", "درباره من"],
  ["contact", "تماس با من"],
]);

export const navBarItemMap = filterMap(projectNavMap, [
  "gallery",
  "about",
  "contact",
]);
export const footerNavMap = filterMap(projectNavMap, [
  "gallery",
  "group-therapy",
  "about",
  "contact",
]);
