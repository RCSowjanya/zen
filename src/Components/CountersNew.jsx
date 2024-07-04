import React, { useEffect, useState } from "react";
import Aos from "aos";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import "aos/dist/aos.css";

const CountersNew = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const items = [
    {
      id: 1,
      icon: FaRegAddressCard,
      heading: "150+",
      description: "Patents filed globally",
      url: "/",
    },
    {
      id: 2,
      icon: AiOutlineSolution,
      heading: "1000+",
      description: "Solutions deployed",
      url: "/",
    },
    {
      id: 3,
      icon: BiCalendar,
      heading: "30",
      description: "Years of legacy",
      url: "/",
    },
    {
      id: 4,
      icon: MdOutlineBusinessCenter,
      heading: "90%",
      description: "Revenue from Repeat Customers",
      url: "/",
    },
    // Add more items as needed
  ];

  return (
    <div data-aos="fade-up">
      <div className="flex items-center bg-gray-200 dark:bg-black justify-between gap-5 max-[600px]:flex-col rounded-md p-5 hover:border-b-[#0094bc]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.id}
              className="count text-center w-full h-full cursor-pointer rounded-xl dark:bg-[rgba(26,26,28,1)] bg-gray-200 border border-slate-300 space-y-5 py-[2%] "
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon
                className={`w-14 h-14 mx-auto hover:p-6 dark:text-white ${
                  hoveredId === item.id ? "text-[#0094bc]" : "text-black"
                } `}
              />
              <h1
                className={`text-4xl text-[#0094BC] font-extrabold ${
                  hoveredId === item.id ? "text-black" : "text-[#0094bc]"
                } `}
              >
                {item.heading}
              </h1>
              <p className="text-md text-black dark:text-white font-bold">
                {item.description}
              </p>
              <a href={item.url}>
                <button
                  className={`dark:bg-[rgba(20,20,26,1)]  bg-white py-2 px-5 text-black dark:text-white font-bold mx-auto mt-8 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border border-[#0094bc] `}
                >
                  Know More
                </button>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default CountersNew;
