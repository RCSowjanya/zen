import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import banner from "../Images/Liveranges-banner.jpg";
import cisr from "../Images/instructor-station.jpg";
import ctsr from "../Images/tubular-container.jpg";
import shoothouse from "../Images/shoot-house.webp";
import hframe from "../Images/h-frame-with-acoustic-sensors-1.jpg";
import rcs from "../Images/rcs.jpg";
import trikaal from "../Images/trikaal-laser-csws-zen.jpg";
import tanktarget from "../Images/moving-tank-target-mechanism.jpg";
import tzs from "../Images/tzs.jpg";
import atgs from "../Images/air_to_ground.webp";
import mfts from "../Images/mfts-in-action.jpg";

import { FiChevronsRight } from "react-icons/fi";
const tabs = [
  {
    id: 1,
    title: "Containerised Indoor Shooting Range (CISR)",
    image: cisr,
    description:
      "Zen CISR is a self-contained, transportable, live-fire shooting facility. It is designed and built to include the target retrieval system/firearm judgmental training video simulator or to serve as a forensic ballistic test facility.Latest acoustic and ricochet materials have been used inside the Shooting Range to create a clean, safe and discreet",
  },
  {
    id: 2,
    title: "Containerised Tubular Shooting Range (CTSR)",
    image: ctsr,
    description:
      "Zen CTSR is a secure indoor substitute for live firing. It is self-contained, transportable and reduces considerably the area required for a range.Two trainees can fire at a time. There is no injury-risk for the shooters, even from accidental fire as each shooter is confined to a tubular booth. The design of the tubular booth is such it does ",
  },
  {
    id: 3,
    title: "Shoot House for Live and Simulated Indoor Tactical Training",
    image: shoothouse,
    description:
      "Zen Shoot House is a safe indoor facility, built to meet the training needs of security personnel involved in operations to eliminate enemy/terrorist threat in closed environment of a built-up area. Shoot House is a concrete and brick/masonry structure with ballistic protection and other essential features like ballistic doors/windows, wooden stair.",
  },
  {
    id: 4,
    title: "Smart Target System (ZEN STS®) - LOMAH™",
    image: hframe,
    description:
      "Zen Smart Target System (LOMAH) is an electro-mechanical, software-driven, acoustical projectile detection and reporting system designed to be used at outdoor ranges for live Small Arms firing. The equipment is rugged, light-weight, easy to assemble and operate. It is available in wired and wireless configurations. The system can be operated",
  },
  {
    id: 5,
    title: "Master Control Station for Live-Firing Ranges (MCS)",
    image: rcs,
    description:
      "Zen Master Control Station (Zen MCS) is a Live Firing Range Control System that enables display and control for all targets in the range.Type of targets that are displayed and can be controlled in the range are 1) Infantry targets Viz. Multi-Function Target System, LOMAH or Zen Smart Target System and Rail Moving Targets 2) Tank Targets Viz.",
  },
  {
    id: 6,
    title: "CornerShot Weapon System - Zen CSWS TRIKAAL",
    image: trikaal,
    description:
      "Zen CSWS TRIKAAL CornerShot Weapon System facilitates shooting around corners, over the top or over walls, without exposing the firer. It helps fire accurately in darkness and low light conditions and also facilitates firing from standing, kneeling, hip as well as lying positions. The Trikaal can be fitted with a pistol such as a Glock 17",
  },
  {
    id: 7,
    title: "Tank targets",
    image: tanktarget,
    description:
      "Zen Technologies offers the static as well as the moving Tank target systems-the Pop-up Static Tank Target Mechanism or STTM and Rail Moving Tank Target Mechanism or MTTM. These targets are ideal for range firing and for tactical firing practices.Moving Tank Target Mechanism (MTTM)The MTTM is a rail based moving platform that carries the designated.",
  },
  {
    id: 8,
    title: "Tank Zeroing System (TZS)",
    image: tzs,
    description:
      "Zen TZS is an accurate system for bore-sighting and zeroing of the main gun of Tanks and other Armoured Fighting Vehicles (AFV). It ensures speedy and reliable process with savings in man-power and ammunition. The system consists of Electronic Bore Sighting Unit (EBSU), Gunner's Display Unit (GDU) and Hit Detection and Analysis System (HDAS).",
  },
  {
    id: 9,
    title: "Air-to-Ground Firing Range Scoring System",
    image: atgs,
    description:
      "Zen Air-to-Ground Firing Range Scoring System has been designed to provide air-to-ground weapons delivery training area a variety of targets which can be deployed, tracked and hit-miss scoring of the exercise recorded.The system consists of Control Tower, Sighting Towers and Command Centre. The Command Centre monitors and records impacts from bomb",
  },
  {
    id: 10,
    title: "ShootEdge®",
    image: atgs,
    description:
      "ShootEdge® is a special purpose adapter for Hand Guns (Pistols) which aids in viewing and shooting about a corner without exposing the shooter to the target. Functionality: ShootEdge has been designed to facilitate shooting with pistols or UBGL around corners, over the top of the walls and from under low gaps without the user being exposed. ",
  },
  {
    id: 11,
    title: "Multi-Functional Target System (MFTS®)",
    image: mfts,
    description:
      "Zen MFTS® is an electro-mechanical system of versatile targets which are programmable from the firers end to perform various movements for firing practices. The system is designed for use both at outdoor and indoor shooting ranges. It is portable and easy to operate. It is a rugged, all-weather system and meets IP 65 standards.",
  },

  // Add more tabs as needed
];

const LiveRanges = () => {
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
    <div>
      <div className="">
        {/* Banner image */}
        <div className="w-full ">
          <img
            src={banner}
            className="w-full pt-[5%] max-[600px]:pt-[17%]"
            alt={activeTab.title}
          />
        </div>
        <div className="text-center mt-5">
          <h2 className="text-4xl dark:text-white text-black uppercase font-extrabold">
            Live Ranges
          </h2>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row">
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
                className={`cursor-pointer mb-4 text-[#0094bc] text-md font-bold p-2 rounded-sm  ${
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
              className="mt-[5%]  mx-auto rounded-3xl"
            />
            <h2 className="text-xl font-bold text-[#0094bc] mb-[2%] mt-[3%]">
              {activeTab.title}
            </h2>
            <p className="dark:text-white text-black font-bold text-md">
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

export default LiveRanges;
