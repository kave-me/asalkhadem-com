import React, { ReactNode } from "react";

interface TestimonialWrapperProps {
  children: ReactNode;
  keyID: string;
  isOpen?: boolean;
  toggle?: () => void;
  ref?: any;
}

export function TestimonialWrapper({
  children,
  keyID,
  ref,
}: TestimonialWrapperProps) {
  return (
    <div className="bg-gray-100" id={"testimonials"} key={keyID} ref={ref}>
      {children}
    </div>
  );
}
