import React, { useState, useEffect } from "react";
import { LuArrowUpCircle } from "react-icons/lu";
const Scrolltotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed bottom-[11%] right-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="hover:bg-white hover:text-[#0094bc] p-1  rounded-md bg-[#0094bc] text-white transition-transform transform duration-300 animate-move-up-down"
      >
        <LuArrowUpCircle size={32} />
      </button>
    </div>
  );
};

export default Scrolltotop;
