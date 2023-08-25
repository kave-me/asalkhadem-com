import React, { useState } from "react";
import { Testimonial } from "components/Testimonial";
import { TestimonialButton } from "components/Testimonial/TestimonialButton";
import { TestimonialWrapper } from "components/Testimonial/TestimonialWrapperProps";

export function TestimonialSection() {
  const [open, setOpen] = useState(false);
  return (
    <TestimonialWrapper keyID="testimonial-wrapper">
      <Testimonial show={open ? 10 : 6} />

      <TestimonialButton
        onClick={() => setOpen((prevState) => !prevState)}
        open={open}
      />
    </TestimonialWrapper>
  );
}
