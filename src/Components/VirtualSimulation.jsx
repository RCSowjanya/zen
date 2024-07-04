import React, { useState } from "react";
import banner from "../Images/Liveranges-banner.jpg";
import mis from "../Images/81mm-mis.webp";
import ads from "../Images/3ads.webp";
import atgm from "../Images/zen-atgm-5.jpg";
import agl from "../Images/agl-after-impact.jpg";
import artifos from "../Images/artyfos.jpg";
import cmt from "../Images/cmt.jpg";
import iwts from "../Images/iwts.jpg";
import uav from "../Images/uav.webp";
import rws from "../Images/rws.jpg";
import mmg1 from "../Images/mmg-1.jpg";
import iadcs from "../Images/iadcs.jpg";
import cwts from "../Images/cwts.jpg";
import ds from "../Images/ds.jpg";
import cgs from "../Images/cgs-1.jpg";
import drivingsimulator from "../Images/driving-simulator.jpg";
import ims from "../Images/ims.jpg";
import t72 from "../Images/t72_gunnery_simulator.jpg";
import t90cgs from "../Images/t-90-cgs.jpg";
import t90ds from "../Images/t90ds.webp";
import t90gs from "../Images/t90gs.jpg";
import zendats from "../Images/zen-dats.jpg";
import zendts from "../Images/dts.webp";
import ds1 from "../Images/ds-1.jpg";
import zenads from "../Images/ads.jpg";
import bussim from "../Images/bussim.jpg";
import tds from "../Images/tds.jpg";
import awesim from "../Images/awesim.webp";

import { FiChevronsRight } from "react-icons/fi";
const tabs = [
  {
    id: 1,
    title: "81mm Mortar Integrated Simulator (81mm MIS)",
    image: mis,
    description:
      "Zen 81mm MIS is designed to enable the soldier to gain proficiency in operating and firing the 81 mm Mortar. The simulator facilitates engagement of target by single or multiple mortar platoons with a composition of four/six mortars per platoon. It comes with an Instructor Station, a Mortar Fire Controller Station, a Mortar Position Controller Stat...",
  },
  {
    id: 2,
    title: "Anti-Aircraft Air Defence Simulator (3ADS)",
    image: ads,
    description:
      "Zen 3ADS is designed to train operators on laying procedures in both simulated and field conditions as well as psycho-physiological training experienced at the time of launch. It is user-friendly and provides data of missile launch, details of target movements and hit-miss information for After Action Reviews (analysis). The simulator is light-weig...",
  },
  {
    id: 3,
    title: "Anti-Tank Guided Missile Simulator (ATGM® Sim)",
    image: atgm,
    description:
      "Zen ATGM® Sim is an indoor simulator, designed and developed to meet the challenging training requirements of missile pilots. It trains recruits and hones the skills of trained pilots in handling and firing missiles.The guided missile simulator enables instructor to track the performance of trainees in real time. The training scenarios can be conf...",
  },
  {
    id: 4,
    title: "Artillery Forward Observers Simulator (ArtyFOS)",
    image: artifos,
    description:
      "Zen ArtyFOS trains Observation Post Officers and Forward Observers of the Artillery and all other officers of combat wings of Army who may be required to fire long-range, indirect fire weapons like mortars, guns, Howitzers, rockets and missiles.It has an Instructor Station and an Observation Post Officers Trainee Station. It facilitates engagement ...",
  },
  {
    id: 5,
    title: "Automatic Grenade Launcher Simulator (AGL Sim)",
    image: agl,
    description:
      "Zen AGL Sim offers a complete training solution to the crew of an Automatic Grenade Launcher. The trainee-in-loop gets the benefit of near-real environment of terrain, combat situation and weapon.The simulator has the provision for engagement of multi-profile targets' static and moving in different modes such as direct, indirect and anti-aircraft r...",
  },
  {
    id: 6,
    title: "Carrier Mortar Tracked Simulator (CMT Sim)",
    image: cmt,
    description:
      "Zen CMT Sim is a fully integrated state-of-the-art in-door simulator. The system is designed to seek total realism for operational training needs of mechanised forces. It trains the 81mm Mortar crew of a Mechanised Infantry Battalion in all facets of efficient handling and effective firing in simulated range conditions and with weapon performance p...",
  },
  {
    id: 7,
    title: "Infantry Weapons Training Simulator (IWTS®)",
    image: iwts,
    description:
      "Zen IWTS facilitates marksmanship training, battle handling of weapons both individually and up to a Section of recruits/soldiers in tactical scenarios of conventional and unconventional operations. The modularly-designed wireless system allows handling of various Small Arms, including in-service Pistol, Carbine, Rifle, Machine Gun, Sniper Rifle, G...",
  },
  {
    id: 8,
    title: "UAV Mission Simulator (UAV Sim)",
    image: uav,
    description:
      "Zen UAV Sim is a comprehensive system developed to train External Pilots, Internal Pilots, Mission Commanders, Observers/Special payload operators and Image Interpreters.The UAV Sim: Offers basic, mission and operational handling training Lends itself to exercise and evaluation of complete operational procedures of different missions/profiles and ...",
  },
  {
    id: 9,
    title: "Rotary Wing Simulator (RWS)",
    image: rws,
    description:
      "Zen Technologies, in partnership with Rockwell Collins, has developed a Full Mission Rotary Wing Simulator that is fully configurable to meet varying training needs of the Indian Armed Forces. The simulator can facilitate ab initio training, conversion training, mission training and high-fidelity Level-D training.Zen's containerised simulator is un...",
  },
  {
    id: 10,
    title: "Medium Machine Gun Simulator (MMG Sim)",
    image: mmg1,
    description:
      "Zen MMG Sim is an interactive indoor training aid to train MMG detachment numbers in techniques of engagement of various targets, fire control and tactical employment of the weapon system.The gunner operates a replica/modified service MMG and engages targets projected on a video screen, in different types of terrain under varying light and environm...",
  },
  {
    id: 11,
    title: "Integrated Air Defence Combat Simulator (Zen IADCS)",
    image: iadcs,
    description:
      "Zen IADCS is a state-of-the-art virtual simulator for training of L 70 and ZU 23-2 guns crews with enhanced realism in weapon handling combined with realistic battle scenarios. Zen IADCS can transform the AD crews to deliver accurate firepower. IADCS WILL ENSURE... REDUCED WEAR AND TEAR OF COMBAT EQUIPMENT. HUGE SAVINGS IN OVERALL C...",
  },
  {
    id: 12,
    title: "Combat Weapons Training Simulator (CWTS)",
    image: cwts,
    description:
      "Zen Combat Weapons Training Simulator (Zen CWTS) is an indoor training System to enhance firing standards in all infantry section weapons such as Light Machine Guns, Rocket Launcher, Rifles and Carbines. The CWTS thus helps train the entire section. The system can easily be upgraded to include new weapons and platoon support weapons in future. Fea...",
  },
  {
    id: 13,
    title: "Infantry Combat Vehicle Driving Simulator (BMP II DS)",
    image: ds,
    description:
      "Zen BMP II DS has been developed to train recruits as well as Special Drivers to drive Infantry Combat Vehicle (ICV) or the Armoured Personnel Carrier (APC) in operational and peace time scenarios. The special ICV/APC driver training simulator replicates driver cabin, look and feel of the driver’s controls, indicators, viewing devices and instrum...",
  },
  {
    id: 14,
    title: "Infantry Combat Vehicle Driving Simulator (BMP II DS)",
    image: ds,
    description:
      "Zen BMP II DS has been developed to train recruits as well as Special Drivers to drive Infantry Combat Vehicle (ICV) or the Armoured Personnel Carrier (APC) in operational and peace time scenarios. The special ICV/APC driver training simulator replicates driver cabin, look and feel of the driver’s controls, indicators, viewing devices and instrum...",
  },
  {
    id: 15,
    title: "Crew Gunnery Simulator for T-72 Tank (T-72 CGS)",
    image: cgs,
    description:
      "Zen T-72 CGS is a comprehensive simulator designed to train both Commanders and gunners of Tank T-72 enabling skill development from basic to advanced levels. It comes with the following features :Interactive Controls FamiliarizationInstruments, indicators and gauges in gunner compartment Gunner’s Sight TPDK-1 Commander Sight TKN 3B All gunnery r...",
  },
  {
    id: 16,
    title: "Driving Simulator for T-72 Tank (T-72 DS)",
    image: drivingsimulator,
    description:
      "Zen T-72 DS is a holistic driving simulator that provides the following training features that enable skill development from basic to advance levels.Interactive Controls FamiliarisationInstruments, indicators and gauges ControlsStarting Drills & ProceduresBattery (normal) start Air start Combined startingDriving TechniquesOperation of accelerat...",
  },
  {
    id: 17,
    title: "BMP II Integrated Missile Simulator (BMP II IMS)",
    image: ims,
    description:
      "Zen BMP II IMS has been developed to meet the training requirements of gunners and Commanders of Infantry Combat Vehicle (ICV)/Armoured Personnel Carrier (APC). It trains recruits and hones the skills of trained gunners in handling and firing different types of weapon systems.It replicates the ergonomics of gunner and Commander cabins. It has the s...",
  },
  {
    id: 18,
    title: "Gunnery Simulator for T-72 Tank (T-72 GS)",
    image: t72,
    description:
      "Zen T-72 GS is for gunner trainees of Tank T-72. It belongs to the stable of Armoured Vehicle Simulators developed by Zen. The simulator provides the following training features that enable skill development from basic to advance levels.Interactive Controls FamiliarisationInstruments, indicators and gauges in gunner compartment Gunner’s Sight TPD...",
  },
  {
    id: 18,
    title: "Crew Gunnery Simulator for T-90 Tank (T-90 CGS)",
    image: t90cgs,
    description:
      "Zen T-90 CGS is a crew gunnery training simulator for both Commander and gunner trainees of Tank T-90. It provides the following training features that enable skill development from basic to advance levels.Interactive Controls FamiliarisationInstruments, indicators and gauges in gunner compartment Gunner’s Sight 1G46 Commander Sights TKN 4S PZU 7...",
  },
  {
    id: 19,
    title: "Driving Simulator for T-90 Tank (T-90 DS)",
    image: t90ds,
    description:
      "Zen T-90 DS belongs to the stable of Armoured Vehicle Simulators developed by Zen. The simulator provides the following training features that enable skill development from basic to advance levels.Interactive Controls FamiliarizationInstruments, indicators and gauges ControlsStarting Drills & ProceduresBattery (normal) start Air start Combined ...",
  },
  {
    id: 20,
    title: "Gunnery Simulator for T-90 Tank (T-90 GS)",
    image: t90gs,
    description:
      "Zen T-90 GS is a gunnery training simulator for gunner trainees of Tank T-90. It belongs to the stable of Armoured Vehicle Simulators developed by Zen. The simulator provides the following training features that enable skill development from basic to advance levels.Interactive Controls FamiliarizationInstruments, indicators and gauges in gunner com...",
  },
  {
    id: 21,
    title: "Advanced Weapons Simulator (AWeSim®)",
    image: awesim,
    description:
      "Zen AWeSim® is a state-of-the-art firearms simulator that recreates Small Arms firing range indoors. It is aimed at training recruits to Special Forces and Commandos. The simulator can be adapted to a number of firearms to impart basic training, hone firing skills, improve weapon handling skills and tests the skill level of trainees in complex and...",
  },
  {
    id: 22,
    title: "Driver Aptitude Testing System (ZEN DATS)",
    image: zendats,
    description:
      "ZEN DATS is a reflex testing system that tests a driver's alertness, depth perception, peripheral vision, night vision and ability to recover quickly from the effects of glare.It identifies individuals prone to accidents by exposing psycho-motor deficiencies. Psycho-motor function is responsible for driver's decisions and is generally referred to a...",
  },
  {
    id: 23,
    title: "Driving Training Simulator (ZEN DTS®)",
    image: zendts,
    description:
      "ZEN DTS is a versatile, indoor training system for light, medium and heavy vehicle drivers. The simulator facilitates training in a 'to-scale' vehicle cabin with actual indicators and controls. The simulator can be configured for both left and right-hand drives. The basic system is supplied with an Instructor Station and a Driver Station. However, ...",
  },
  {
    id: 24,
    title: "Automated Driving Simulator (ZEN ADS)",
    image: zenads,
    description:
      "ZEN ADS is a standalone, versatile, indoor, classroom driver training simulator. The simulator for Light, Medium and Heavy vehicles comes with the option of either left or right hand drive. The simulator facilitates training in a mock-up vehicle cabin with actual indicators and controls, thereby creating a realistic driving environment. The system ...",
  },
  {
    id: 25,
    title: "Driving Simulator (DS)",
    image: ds1,
    description:
      "Zen DS is a versatile indoor, classroom driver training simulator. The simulator of Light, Medium and Heavy vehicles come with the option of either Left or Right Hand drive. The basic system is supplied with a single Instructor Station and a Driver Station but it has facility to control up to 10 Driver Stations of various combinations of vehicles i...",
  },
  {
    id: 26,
    title: "Bus Driving Simulator (BusSim)",
    image: bussim,
    description:
      "Zen BusSim is a versatile indoor training system that trains bus drivers of varied skill-sets and experience. The simulator uses ‘to scale’ bus cabin with all gauges, controls, transmission systems and indicators found in a bus. The software has been specially developed to recreate the typical environment in which bus drivers operate. It takes ...",
  },
  {
    id: 27,
    title: "Tatra Driving Simulator (TDS)",
    image: tds,
    description:
      "Zen TDS is an indoor system that transforms recruits into skilled drivers through various levels of complex exercises, in all kinds of terrain, visibility and weather conditions, using 3D computer-generated visuals.The simulator has exercises for beginners as well as experienced drivers. It uses intelligent traffic models (ITM) to create realistic ...",
  },
];
const VirtualSimulation = () => {
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
        <div className="w-full">
          <img
            src={banner}
            className="w-full pt-[5%] max-[600px]:pt-[17%]"
            alt={activeTab.title}
          />
        </div>
        <div className="text-center">
          <h2 className="text-4xl dark:text-white text-black uppercase font-extrabold min-[1000px]:py-[2%]">
            Virtual Simulation
          </h2>
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
                  className={`cursor-pointer mb-2 text-[#0094bc] text-sm font-bold p-1 rounded-sm ${
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
              <p className="dark:text-white text-black text-md font-bold">
                {activeTab.description}
              </p>
              <button className="px-8 py-2 bg-[#0094bc] text-white mt-[2%] rounded-lg font-bold">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualSimulation;
