import { FaInstagram } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
import React from "react";
import { VideoBox } from "components/Video/VideoBox";

export function DontNeedSection() {
  return (
    <section className="my-20 overflow-hidden">
      {/* CTA box */}
      <div className="relative mx-auto overflow-hidden rounded bg-gray-900  px-8 py-10  md:px-12 md:pb-8 md:pt-16 ">
        {/* Background illustration */}
        <div className="relative mx-auto flex flex-col items-center justify-between  lg:flex-row ">
          <div className="mx-auto rounded border-2 border-dashed border-red-500 bg-red-400/10 p-4 text-center shadow lg:max-w-xl lg:text-right">
            <FaTriangleExclamation className="mx-auto mb-4 block text-5xl text-red-500" />

            {/* CTA content */}
            <h3 className="text-center text-2xl font-black text-red-400">
              من به روانشناس نیازی ندارم!
            </h3>
            <VideoBox video={"somestr"} videoWidth={1920} videoHeight={1080} />
            {/*  social media tag */}
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://www.instagram.com/asalkhadem/"
                target="_blank"
                rel="noreferrer"
                className={" flex  items-center justify-center"}
              >
                <FaInstagram className="text-2xl text-fuchsia-500 drop-shadow hover:scale-105 hover:text-fuchsia-500 " />
              </a>
            </div>
            <h3 className=" mb-4 mt-2 text-center  text-xs text-white ">
              همه ما به روانشناس نیازمندیم. به پویش #من_هم_به_روانشناس_نیازمندم
              بپیوندید.
            </h3>

            <ul className={"flex flex-wrap justify-center gap-2"}>
              {[
                "#انسان_مدرن_به_روانشناس_مراجعه_میکند",
                "#من_هم_به_روانشناس_نیازمندم",
                "#چرا_سرو_را_خاکستر_کنیم",
              ].map((item, index) => (
                <li
                  key={index}
                  className="inline-block cursor-pointer rounded border border-blue-400 p-1 text-xs text-blue-300 hover:border-blue-500 hover:text-blue-500 hover:underline active:text-blue-600"
                >
                  <a
                    href={`https://www.instagram.com/explore/tags/${item}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden scale-125 overflow-hidden lg:block"
          aria-hidden="true"
        >
          <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                cx="35.542%"
                cy="34.553%"
                fx="35.542%"
                fy="34.553%"
                r="96.031%"
                id="ni-a"
              >
                <stop stopColor="#DFDFDF" offset="0%" />
                <stop stopColor="#4C4C4C" offset="44.317%" />
                <stop stopColor="#333" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g fill="#FFF">
                <ellipse
                  fillOpacity=".04"
                  cx="185"
                  cy="15.576"
                  rx="16"
                  ry="15.576"
                />
                <ellipse
                  fillOpacity=".24"
                  cx="100"
                  cy="68.402"
                  rx="24"
                  ry="23.364"
                />
                <ellipse
                  fillOpacity=".12"
                  cx="29"
                  cy="251.231"
                  rx="29"
                  ry="28.231"
                />
                <ellipse
                  fillOpacity=".64"
                  cx="29"
                  cy="251.231"
                  rx="8"
                  ry="7.788"
                />
                <ellipse
                  fillOpacity=".12"
                  cx="342"
                  cy="31.303"
                  rx="8"
                  ry="7.788"
                />
                <ellipse
                  fillOpacity=".48"
                  cx="62"
                  cy="126.811"
                  rx="2"
                  ry="1.947"
                />
                <ellipse
                  fillOpacity=".12"
                  cx="78"
                  cy="7.072"
                  rx="2"
                  ry="1.947"
                />
                <ellipse
                  fillOpacity=".64"
                  cx="185"
                  cy="15.576"
                  rx="6"
                  ry="5.841"
                />
              </g>
              <circle
                fill="url(#ni-a)"
                cx="276"
                cy="237"
                r="200"
                className="scale-105"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
