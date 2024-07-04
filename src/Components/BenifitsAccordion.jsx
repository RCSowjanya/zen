import React, { useState } from "react";
const BenifitsAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/*----Accordion---*/}
      <div className="border border-gray-300 rounded-md mb-4">
        <div
          className="flex items-center justify-between px-4 py-3 bg-gray-200 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-bold text-[#0094bc]">{title}</h2>
          <svg
            className={`w-6 h-6 text-[#0094bc] ${
              isOpen ? "transform rotate-180" : ""
            }`}
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
        </div>
        {isOpen && (
          <div className="px-4 py-3 bg-white text-black">{children}</div>
        )}
      </div>
    </div>
  );
};

export default BenifitsAccordion;
