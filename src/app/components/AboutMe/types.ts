import { IconType } from "react-icons";

export interface IPortfolioRecord {
  id: number;
  title: string;
  date: string;
}

export interface IPortfolioItem {
  category: string;
  icon: IconType;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  records: IPortfolioRecord[];
}
