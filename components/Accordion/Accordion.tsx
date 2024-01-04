"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        onClick={() => setIsActive(!isActive)}
        className="accordion-item__title"
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-item__content">{content}</div>}
    </div>
  );
};

export default Accordion;
