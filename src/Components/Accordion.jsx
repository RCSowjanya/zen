import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border-b border-gray-200 mb-2">
      <div
        className="accordion-header cursor-pointer p-4 flex justify-between items-center bg-gray-100"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold text-black">{title}</h3>
        <span className="text-black text-xl font-bold">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content p-4 dark:bg-[rgba(26,26,28,1)] dark:text-white text-black bg-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
