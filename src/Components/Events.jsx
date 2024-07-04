import React, { useState, useEffect } from "react";
import event1 from "../Images/modhi.jpg";
import event2 from "../Images/milan-technical-exposition.jpg";
import event3 from "../Images/world-defense-show-2024.jpg";
import event4 from "../Images/delegation-from-royal-thai-air-force.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

const eventsdata = [
  {
    image: event1,
    heading: "MILAN 2024 Technical Exposition (MTEX-24)",
    description:
      "Zen Technologies Limited was honored to present its cutting-edge Smart Training solutions and...",
    url: "https://www.zentechnologies.com/event-detail/MILAN-2024-Technical-Exposition-MTEX-24",
  },
  {
    image: event2,
    heading: "World Defense Show 2024",
    description:
      "We look forward to discuss your training requirements, so that we can meet and customize your training needs....",
    url: "https://www.zentechnologies.com/event-detail/world-defense-show-2024",
  },
  {
    image: event3,
    heading: "Delegation from Royal Thai Air Force",
    description:
      "Zen Technologies Limited unveils State-of-the-Art Smart Training Solutions at Defense & Security Expo 2023, reinforcing our...",
    url: "https://www.zentechnologies.com/event-detail/delegation-royal-thai-air-force",
  },
  {
    image: event4,
    heading: "Bharat-Kenya Mini DefExpo",
    description:
      "Zen Technologies Limited showcased Cutting-Edge Training Solutions and Counter-Drone Technologies that redefine excellence...",
    url: "https://www.zentechnologies.com/event-detail/Bharat-Kenya-Mini-DefExpo",
  },
];

const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1 className="underline mt-11 mb-28 text-4xl dark:text-white text-black text-center font-extrabold">
        Events
      </h1>
      <div className="flex items-center justify-center max-[900px]:flex-col gap-5 px-6 relative">
        {eventsdata.map((data, index) => (
          <div
            key={index}
            className={`relative mb-[3%] ${
              isLargeScreen ? "max-[1000px]:w-full" : "w-full"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              marginTop:
                isLargeScreen && (index === 1 || index === 3) ? "-8%" : "",
            }}
          >
            <img
              className="transform scale-100 rounded-md w-[285px] h-[408px] max-[1000px]:w-full transition-transform duration-300 ease-in-out hover:scale-105 mt-2 space-y-6"
              src={data.image}
              alt="zen-event"
              data-aos={
                isLargeScreen
                  ? index === 0 || index === 2
                    ? "fade-down"
                    : "fade-up"
                  : ""
              }
              data-aos-delay={
                isLargeScreen ? (index === 0 || index === 2 ? 500 : 650) : ""
              }
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-50 opacity-70 rounded-md"></div>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 dark:bg-black bg-gray-700 hover:opacity-80 transition-opacity duration-300 ease-in-out pl-6 space-y-2">
              <h1 className="text-white text-2xl font-bold mb-2">
                {data.heading}
              </h1>
              <p className="text-white">{data.description}</p>
              <a
                href={data.url}
                className="text-white mt-4 border-2 border-white rounded-md p-3"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
