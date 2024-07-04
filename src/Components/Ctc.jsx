import React from "react";
import banner from "../Images/Liveranges-banner.jpg";
import ctc from "../Images/zen-ctc.webp";
import { FaHandPointRight } from "react-icons/fa";

const contentData = [
  {
    type: "text",
    title: "Combat Readiness Score",
    content:
      "We are the world's only training systems supplier that calculates a Combat Readiness Score (CRS) at the completion of training exercises. The CRS is derived from data captured during training sessions and provides an easy-to-understand way for Leaders and Commanders to measure the level of Combat Readiness. Tracking the Combat Readiness Score over time confirms training effectiveness to maintain mission-ready soldiers.",
  },
  {
    type: "text",
    title:
      "Common Operating Picture for Live, Virtual and Constructive Training",
    content:
      "Zen Combat Training Centre provides realistic combat experience by recreating the real battle environment using a mix of Live ranges, Live instrumented, Virtual and Constructive simulation, increasing the efficiency of your defense forces.",
  },
  {
    type: "text",
    title: "Integrated Individual and Collective Training",
    content:
      "The CTC can train forces from Platoon to Brigade level and can be used for achieving objectives ranging from individual skill development to unified tactical operations both in open terrain and built-up area. The CTC is ideal both for conventional warfare as well as Militarized Operations in Urban Terrain (MOUT)/counter-terrorism operations. The comprehensive scoring model of the CTC allows you to get an objective measure of the level of combat preparedness of your forces.",
  },
  {
    type: "list",
    title: "Facilities at CTC",
    items: [
      "Smart Live-fire shooting ranges with STS® and MFTS® to detect the position of hit and reflex shooting training",
      "Live' force-on-force engagement with TacSim® and ITS for training personnel in tackling enemy/terrorist threat with opposed fire",
      "Shoot House for room clearing drills and training for eliminating the threat in a closed environment",
      "Simulator training (AWeSim, MMG, AGL, and Infantry weapons) for tactical, judgemental, reflex shooting and improving marksmanship(DFCC)",
      "Central Control Room to monitor all training facilities and events and After Action Review (AAR) for critique and analysis",
      "Communication system linking all facilities",
      "Other infrastructure necessary for additional equipment and training",
    ],
  },
];

const Ctc = () => {
  return (
    <div>
      {/*----banner image----*/}
      <div className="w-full ">
        <img
          src={banner}
          className="w-full pt-[5%] max-[600px]:pt-[17%]"
          alt="ctc"
        />
      </div>
      <div className="text-center ">
        <h2 className="text-4xl dark:text-white text-black uppercase font-extrabold py-[1%]">
          Combat Training Centre (CTC)
        </h2>
      </div>

      {/*---banner image close----*/}
      {/*----product description----*/}
      {/*-----left side image and right side scrollable content---*/}
      <div className="flex max-[1000px]:flex-col  h-[600px] max-[1000px]:h-full">
        {/* Left side with fixed image */}
        <div className="flex-none">
          <img
            src={ctc}
            alt="Fixed Image"
            className="h-auto object-cover min-w-[300px] max-[1000px]:w-full"
          />
        </div>

        {/* Right side with scrollable content */}
        <div className="flex-grow overflow-y-auto text-white">
          <div className="container mx-auto p-4 space-y-9">
            {/* Your content goes here */}
            <h1 className="text-3xl font-bold mb-4 underline text-center py-6 dark:text-white text-black">
              Combat Training Centre (CTC)
            </h1>
            <p className="text-lg text-black dark:text-white font-bold">
              Combat ready soldiers are fundamental for the security and defense
              of the country. No matter where or when armed forces are deployed,
              the skills of a fighting force must constantly be refined and
              aligned with mission objectives and situations. Zen Technologies
              produces an expansive portfolio of live, virtual, constructive and
              mixed reality combat training systems to develop and maintain
              combat-ready soldiers.
            </p>
            {contentData.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl text-[#0094bc] font-bold mb-3">
                  {section.title}
                </h2>
                {section.type === "text" ? (
                  <p className="text-lg text-black dark:text-white font-bold">
                    {section.content}
                  </p>
                ) : (
                  <div>
                    {section.items.map((item, itemIndex) => (
                      <div className="flex gap-4 mb-3" key={itemIndex}>
                        <FaHandPointRight className="text-black dark:text-white" />
                        <p className="text-lg text-black dark:text-white font-bold mt-[-1%]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/*----modules declaration close----*/}
          </div>
        </div>
        {/* Right side with scrollable content close */}
      </div>
      {/*----Video----*/}
      <div className="text-center mt-[6%]">
        <div className="mb-[3%]">
          <h2 className="text-2xl dark:text-white text-black font-bold underline">
            Counter Drone System - Product Video
          </h2>
        </div>
        <div className="inline-grid w-full h-auto px-4">
          <div className="relative pt-[56.25%] w-full h-0 overflow-hidden">
            {/* 16:9 aspect ratio (56.25%) */}
            <iframe
              title="About video"
              src="https://www.youtube.com/embed/2OsQzZwhtAw?si=nVWLBzgqxsNNLz6i"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
      {/*--video closed---*/}
      {/*--left side image and right side scrollable content close---*/}
    </div>
  );
};

export default Ctc;
