import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ITestimonialButton {
  onClick: () => void;
  open: boolean;
}

export function TestimonialButton({ onClick, open }: ITestimonialButton) {
  return (
    <div className={"-mt-[16rem] bg-indigo-50/95 py-10  "}>
      <button
        className={
          "mx-auto  flex h-12 w-12 transform  flex-col items-center rounded-md  bg-gradient-to-tr from-green-400  to-green-500 p-2 text-center text-green-50 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl  "
        }
        onClick={(e) => {
          e.preventDefault();
          // Scroll to the begging of section (The Parent)
          if (open) {
            // @ts-ignore
            document
              .getElementById("testimonials")
              .scrollIntoView({ behavior: "smooth" });
          }
          // Scroll to the begging of section (The Parent)
          onClick();
        }}
      >
        {open ? (
          <FaChevronUp className="inline-block h-6 w-6  animate-bounce " />
        ) : (
          <FaChevronDown className="inline-block h-6 w-6 animate-bounce " />
        )}
      </button>
    </div>
  );
}
