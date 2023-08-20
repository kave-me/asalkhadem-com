import {
  FaInstagram,
  FaPhone,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import favicon from "../../../../public/favicon.ico";
import React from "react";

export function ContactMeSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-50 via-sky-50 to-white py-16  ">
      <div
        className={`container mx-auto max-w-max space-y-10 border-2 border-dashed border-indigo-200 bg-indigo-100  px-4 py-16 lg:px-8 lg:py-32  `}
      >
        <div className="text-center">
          <p className="mb-10  text-sm  font-bold text-blue-700 opacity-80  ">
            تماس با من
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-6 text-3xl font-extrabold md:text-4xl">
            تمایل دارید با من در ارتباط باشید؟
          </h3>
          <p className="mx-auto  pb-16 text-base font-medium text-gray-600 md:leading-relaxed lg:w-2/3">
            می‌توانید از طریق پیام کوتاه و شبکه‌های اجتماعی زیر با من در ارتباط
            باشید.
          </p>

          <ul className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-5 rounded-lg bg-teal-200 bg-opacity-30 p-8 text-center text-6xl  shadow ">
            <li className="inline-block">
              <a
                href="https://wa.me/00989389194334"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-6xl text-green-400 drop-shadow hover:scale-105 hover:text-green-600 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="https://t.me/asalkhadem"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-6xl text-fuchsia-500 drop-shadow hover:scale-105 hover:text-fuchsia-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="https://t.me/asalkhadem"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="text-6xl text-blue-400 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a
                href="skype:live:.cid.4631ac0e43848cd6?chat"
                target="_blank"
                rel="noreferrer"
              >
                <FaSkype className="text-6xl text-blue-400/90 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a href="tel:00989201425226" target="_blank" rel="noreferrer">
                <FaPhone className="text-6xl text-blue-400 drop-shadow hover:scale-105 hover:text-blue-500 " />
              </a>
            </li>
            <li className="inline-block">
              <a href="tel:00989389194334" target="_blank" rel="noreferrer">
                <FaPhone className="text-6xl text-green-400 drop-shadow hover:scale-105 hover:text-green-500 " />
              </a>
            </li>
          </ul>
          <QRCodeSVG
            className={"mx-auto mt-24 rounded shadow-lg"}
            value={"tel:00989389194334"}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            imageSettings={{
              src: favicon.src,
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
          />
        </div>
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute bottom-0 right-0 hidden scale-150 mix-blend-multiply filter lg:block"
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
                <stop stopColor="#E0E7FF" offset="44.317%" />
                <stop stopColor="#9C95BD" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd" className="animate-pulse">
              <g fill="#D8CEFF">
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
                className="scale-150 animate-pulse opacity-40"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
