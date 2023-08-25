import { IconType } from "react-icons";
import { Tab } from "@headlessui/react";
import { IPortfolioItem } from "components/AboutMe/types";

interface IAboutMeButton {
  ButtonIcon: IconType;
  text: string;
}

function CustomButton({ ButtonIcon, text }: IAboutMeButton) {
  return (
    <button className=" flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl py-5 dark:bg-[#313131] ">
      <span className="text-3xl font-semibold leading-none text-gray-800 ">
        {text}
      </span>

      <ButtonIcon className="h-8 w-8 " />
    </button>
  );
}

interface ITabButton {
  item: IPortfolioItem;
}

export function TabButton({
  item: { category, description, icon },
}: ITabButton) {
  return (
    <Tab
      className={
        " group rounded-lg bg-gray-200 px-5 py-3 text-lg font-black leading-none tracking-tight text-gray-800 shadow-lg  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 active:scale-95"
      }
      key={description}
    >
      <CustomButton ButtonIcon={icon} text={category} />
    </Tab>
  );
}
