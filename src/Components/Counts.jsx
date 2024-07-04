import React, { useEffect, useState } from "react";
import Aos from "aos";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import "aos/dist/aos.css";

const Counts = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  // Define initial count states for each item
  const [counts, setCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const items = [
    {
      id: 1,
      icon: FaRegAddressCard,
      heading: "150+",
      description: "Patents filed globally",
      url: "/",
      destination: 150,
    },
    {
      id: 2,
      icon: AiOutlineSolution,
      heading: "1000+",
      description: "Solutions deployed",
      url: "/",
      destination: 1000,
    },
    {
      id: 3,
      icon: BiCalendar,
      heading: "30",
      description: "Years of legacy",
      url: "/",
      destination: 30,
    },
    {
      id: 4,
      icon: MdOutlineBusinessCenter,
      heading: "90%",
      description: "Revenue from Repeat Customers",
      url: "/",
      destination: 90,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update count for each item until it reaches the destination
      setCounts((prevCounts) => {
        const updatedCounts = { ...prevCounts };
        items.forEach((item) => {
          if (updatedCounts[item.id] < item.destination) {
            updatedCounts[item.id] += 5;
          }
        });
        return updatedCounts;
      });
    }, 30); // Interval in milliseconds, adjust as needed

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="grid gap-[30px] px-[2%] sm:grid-cols-2 xl:grid-cols-4 my-[10%]">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <li
            key={item.id}
            className="p-8 text-white rounded-md relative dark:bg-[#1a1a1c] dark:border-none bg-gray-200 border border-slate-300"
            data-aos="fade-up"
          >
            <div className="relative">
              <Icon className="w-12 h-auto absolute right-0 top-0 bg-[#0094bc] p-2 cursor-pointer hover:rotate-180" />
            </div>
            <h1 className="font-extrabold text-5xl dark:text-white text-black">
              {counts[item.id]}
            </h1>
            {/* Display the current count */}
            <p className="text-md dark:text-white text-black font-bold">
              {item.description}
            </p>
          </li>
        );
      })}
    </div>
  );
};

export default Counts;
