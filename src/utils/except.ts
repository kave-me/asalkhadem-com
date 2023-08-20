import { iNavitem } from "config/nav-items";

export const except = (items: iNavitem[]) => (blackList: string[]) =>
  items.filter((item: { route: string }) => !blackList.includes(item.route));
