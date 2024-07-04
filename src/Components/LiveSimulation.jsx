import React, { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import banner from "../Images/Liveranges-banner.jpg";
import handgrenade from "../Images/hand-grenade.webp";
import acts from "../Images/zen-acts.png";
import its from "../Images/its.jpg";
import umpiregun from "../Images/umpire-gun.jpg";
const tabs = [
  {
    id: 1,
    title: "Hand Grenade Simulator (HE36S®)",
    image: handgrenade,
    description:
      "Zen HE36S® is a patented hand grenade simulator that helps trainees develop a high degree of mind-body coordination, essential for effectively firing hand grenades and preventing accidents. It is a non-fragmenting and reusable hand grenade. It is useful for soldiers for handling, practicing lobbing techniques and reacting to the timing of the fuse...",
  },
  {
    id: 2,
    title: "Armour Combat Training System (ZEN ACTS™)",
    image: acts,
    description:
      "The Zen ACTS is designed to meet the training requirements of the Mechanised Forces in field craft, battle drills, and tactical & gunnery procedures. It is ideal for force-on-force tactical training including simulated battle engagements.The system seamlessly assimilates retrofitted Laser Unit and Sensor Unit with Exercise Control, Interface Un... ",
  },
  {
    id: 3,
    title: "TacSim® Indoor Tracking System",
    image: its,
    description:
      "Zen TacSim® with ITS is designed to meet the training needs of forces tasked to combat enemy/terrorists operating from built-up area/buildings, by physical intervention.The system is akin to the Zen outdoor Tactical Engagement Simulator (TacSim®) with additional features that enable its functioning indoors, where GPS does not work. A two-sided ta...",
  },
  {
    id: 4,
    title: "TacSim® - Tactical Engagement Simulator",
    image: umpiregun,
    description:
      "Zen TacSim® trains soldiers to utilize the skills acquired during training in field craft, battle drills and live-fire practice while carrying out operational exercises.The simulator assimilates lasers fired from different weapon systems and effectively records the result of the engagement. This combat simulator is designed for transparency and ta...",
  },

  // Add more tabs as needed
];
const LiveSimulation = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Close sidebar on mobile when a tab is clicked
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
      {/* Banner image */}
      <div className="w-full">
        <img
          src={banner}
          className="w-full pt-[5%] max-[600px]:pt-[17%]"
          alt={activeTab.title}
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl dark:text-white text-black uppercase font-extrabold min-[1000px]:py-[2%]">
          Live Simulation
        </h2>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row  ">
        {/* Burger icon for mobile */}
        <div className="min-[1000px]:hidden">
          <button onClick={toggleSidebar} className="bg-[#0094bc] m-[3%]">
            <FiChevronsRight size={24} className="text-white" />
          </button>
        </div>
        {/* Sidebar content */}
        <div
          className={`lg:w-1/4 bg-[#0094bc] p-4 ${
            sidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="py-4">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer mb-4 text-[#0094bc]  text-md font-bold p-2 rounded-sm ${
                  tab === activeTab ? "bg-[#0094bc] text-white" : "bg-white"
                }`}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
        {/* Main content */}
        <div className="w-full lg:w-3/4 dark:dark:bg-black bg-gray-200 text-center">
          <div className="p-4">
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="m-[5%] mx-auto"
            />
            <h2 className="text-xl font-bold text-[#0094bc] mb-[2%]">
              {activeTab.title}
            </h2>
            <p className="dark:text-white text-black  font-bold text-md">
              {activeTab.description}
            </p>
            <button className="px-8 py-2 bg-[#0094bc] text-white mt-[2%] rounded-lg font-bold">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSimulation;
