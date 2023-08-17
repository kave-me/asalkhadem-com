import React, { ReactNode, useState } from "react";
import { Testimonial } from "components/Testimonial";

interface TestimonialWrapperProps {
  children: ReactNode;
  keyID: string;
  isOpen?: boolean;
  toggle?: () => void;
}

const TestimonialWrapper = ({ children, keyID }: TestimonialWrapperProps) => {
  return (
    <div className="bg-gray-100" key={keyID}>
      {children}
    </div>
  );
};
export const TestimonialSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <TestimonialWrapper keyID="testimonial-wrapper">
      {!open ? <Testimonial show={4} /> : <Testimonial show={10} />}
      <button
        className={
          "mx-auto -mt-6 mb-4 flex h-12 w-12  transform flex-col items-center rounded-md bg-gradient-to-tr from-green-400 to-green-500 p-2 text-center text-green-50 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl "
        }
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6 animate-bounce "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
    </TestimonialWrapper>
  );
};
