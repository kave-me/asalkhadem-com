import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Tab } from "@headlessui/react";
import { className } from "postcss-selector-parser";
import { portfolio } from "components/AboutMe/data";
import { FaLightbulb } from "react-icons/fa";

//   {/*	<p className="text-justify">*/}
//   سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات
//   و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.
// </h3>

{
  /* 
      <h4 className="mx-auto text-lg font-bold tracking-tighter text-gray-200 md:text-xl md:leading-relaxed lg:w-2/3">
        روانشناس و روان درمانگر
      </h4>

      <div className="mx-auto max-w-3xl text-base leading-loose tracking-tight text-gray-200 ">
        <p className="my-2 text-justify">
          از سال ۱۳۹۲ تا کنون در زمینه مشاوره و مربیگری روانشناسی فعالیت می‌کنم.
          در این مدت به بیش از ۱۰۰۰ نفر کمک کرده‌ام تا به اهدافشان برسند.
        </p>
        <p className="text-justify">
          برای این کار از روش‌های مختلفی استفاده می‌کنم که در ادامه به برخی از
          آن‌ها اشاره می‌کنم.
        </p>
        <p className="text-justify">
          تخصص اصلی من در رواندرمانی وجودی یا وجودگرایی است. در این روش با
          احساسات و افکار منفی خود کنار می‌آییم و به زندگی مطلوب خود می‌رسیم.
        </p> */
}

//   const subHead =
//     "سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const heading = "من کی هستم؟";

const subHead =
  "سلام! من یک مشاور و مربی روانشناسی هستم، بهتون کمک می‌کنم تا با احساسات و افکار منفی خود کنار بیایید و به زندگی مطلوب خود برسید.";
