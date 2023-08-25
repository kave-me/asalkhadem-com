"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { portfolio } from "components/AboutMe/data";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TabButton } from "components/AboutMe/TabButton";

export function LegacyAboutMeSection() {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <section className="min-h-screen bg-gray-900 pt-8 ">
      <h2 className="pb-8 pt-16 text-center text-[4rem] font-black tracking-tight text-gray-100">
        من کی هستم؟
      </h2>
      <Tab.Group className={"flex flex-col gap-8"} as={"div"}>
        <Tab.Panels ref={parent}>
          {Object.values(portfolio).map((portfolioItem, index) => (
            <Tab.Panel
              key={portfolioItem.category}
              className={`mx-auto flex max-w-5xl  gap-8 rounded-lg bg-gradient-to-bl from-gray-50 via-indigo-50 to-gray-100 p-4 shadow-lg`}
              as="article"
            >
              <Image
                className="rounded-lg border-2 border-indigo-100 object-cover shadow"
                src={portfolioItem.image.src}
                alt={portfolioItem.image.alt}
                width={500}
                height={500}
              />
              <div className="w-full rounded  ">
                <h2 className="pb-4 pt-4 text-center text-[2.5rem] font-bold text-gray-800">
                  {portfolioItem.category}
                </h2>
                <p className="pb-4 text-justify text-base leading-7 text-gray-800">
                  {portfolioItem.description}
                </p>
                <ul className=" flex w-full list-image-none flex-wrap gap-2 text-base leading-7 text-gray-800">
                  {portfolioItem.records.map((record, index) => (
                    <li
                      key={record.title}
                      className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white/50 p-4 shadow-md"
                    >
                      <h3 className="text-base font-bold text-gray-800">
                        {record.title}{" "}
                      </h3>
                      <p className="text-xs text-gray-600">( {record.date})</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List
          as="article"
          className={"mx-auto flex w-full  items-center justify-center gap-4"}
        >
          {portfolio.map((portfolioItem) => (
            <TabButton key={portfolioItem.description} item={portfolioItem} />
          ))}
        </Tab.List>
      </Tab.Group>
    </section>
  );
}
