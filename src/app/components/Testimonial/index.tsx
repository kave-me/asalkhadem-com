"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";
import { data } from "components/Testimonial/data";
import {
  TestimonialCard,
  TestimonialCardProps,
} from "components/Testimonial/TestimonialCard";
import { HeadTestimonial } from "components/Testimonial/HeadTestimonial";

export function Testimonial({ show = 4 }: TestimonialCardProps) {
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 300,
    easing: "ease-in",
  });
  useEffect(() => {
    enableAnimations(true);
  }, [enableAnimations]);
  return (
    <div className="relative min-h-max border-t-2 border-dashed border-indigo-200 bg-[conic-gradient(at_right_center,_var(--tw-gradient-stops))] from-green-100 via-white to-indigo-100 ">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:pb-32 lg:pt-16 xl:max-w-7xl">
        <HeadTestimonial />
        <div
          className="grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 md:gap-8"
          ref={parent}
        >
          {data.map((item, index) => {
            if (index < show) {
              return (
                <TestimonialCard
                  key={item.quote}
                  time={item.time}
                  quote={item.quote}
                  name={item.name}
                  blur={index + 1 > show - 2}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
