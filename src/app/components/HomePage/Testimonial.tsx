import React, { ReactNode, useState } from "react";
import { Testimonial } from "components/Testimonial";
import { TestimonialButton } from "components/Testimonial/TestimonialButton";

export function TestimonialSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-200" id={"testimonials"}>
      <Testimonial show={open ? 10 : 4} />

      <TestimonialButton
        onClick={() => setOpen((prevState) => !prevState)}
        open={open}
      />
    </div>
  );
}
