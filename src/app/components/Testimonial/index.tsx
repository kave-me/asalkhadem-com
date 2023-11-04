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
    <>
      <HeadTestimonial />
      <div
        className="mx-auto grid grid-cols-1 gap-4  overflow-hidden p-2 md:grid-cols-2 md:gap-8 md:p-4 xl:max-w-3xl xl:p-16 "
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
                blur={false}
              />
            );
          }
        })}
      </div>
    </>
  );
}
