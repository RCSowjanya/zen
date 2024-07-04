import React from "react";
import banner from "../Images/zen-counter-drone_system.jpg";
import antidrone from "../Images/zen_anti_drone_counter_drone_system.jpg";
import { FaHandPointRight } from "react-icons/fa";
import Accordion from "./Accordion";
import AdGallery from "./AdGallery";
const AntidroneSystem = () => {
  return (
    <div>
      {/*----banner image----*/}
      <div className="">
        <img
          src={banner}
          className="w-full h-auto pt-[4%] max-[1000px]:pt-[8%]"
          alt="banner"
        />
        <div className="  ">
          <h2 className="text-4xl dark:text-white uppercase my-6 font-extrabold text-center text-black">
            AntiDrone System
          </h2>
        </div>
      </div>
      {/*---banner image close----*/}
      {/*----product description----*/}
      {/*-----left side image and right side scrollable content---*/}
      <div className="flex flex-col min-[1000px]:flex-row h-[600px] max-[1000px]:h-auto">
        {/* Left side with fixed image */}
        <div className="flex-none">
          <img
            src={antidrone}
            alt="Fixed Image"
            className="h-auto object-cover min-w-[300px] max-[1000px]:min-w-full"
          />
        </div>

        {/* Right side with scrollable content */}
        <div className="flex-grow overflow-y-auto dark:text-white text-black dark:bg-black bg-gray-200  max-[900px]:w-full">
          <div className="container mx-auto p-4 space-y-9">
            {/* Your content goes here */}
            <h1 className="text-3xl font-bold mb-4 underline text-center py-6 ">
              Anti Drone System
            </h1>
            <p className="text-lg dark:text-white text-black font-bold">
              Anti Drone System from Zen Technologies works on drone detection,
              Classification and tracking on passive surveillance, camera
              sensors and neutralization of the threat through jamming the Drone
              communication.
            </p>

            <p className="text-lg dark:text-white text-black font-bold">
              Zen Anti Drone System (CUAS)/Counter Unmanned Aerial System is a
              multi-layer multi sensor Architecture aimed at providing
              comprehensive security against drone attacks.
            </p>

            <div>
              <h3 className="text-2xl text-[#0094bc] font-extrabold mb-[4%]">
                Modules of Multi sensor setup include:
              </h3>
              <div className="flex gap-4 mb-3 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>RF Based Drone detector (RFDD)</p>
              </div>
              <div className="flex gap-4 mb-3 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Video based Drone Identification & Tracking (VDIT) </p>
              </div>
              <div className="flex gap-4 mb-3 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>RADAR</p>
              </div>
              <div className="flex gap-4 mb-3 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Data fusion and Command Center (DFCC)</p>
              </div>
              <div className="flex gap-4 mb-3 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Drone RF Jammer (DRFJ)</p>
              </div>
              <div className="flex gap-4 dark:text-white text-black font-bold">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Hard kill</p>
              </div>
            </div>
            {/*----Accordion----*/}
            <div className="container mx-auto p-4">
              <Accordion title="RF Based Drone detector (RFDD)">
                <p className=" dark:text-white text-black ">
                  RFDD detects the drone using Radio Frequency (RF)
                  communication between drone and Ground control center (GCC).
                  This System is on continuous search mode on wide band of
                  frequencies that are typically used by Drone and its GCC.
                  Whenever a frequency of interest is identified, the system
                  locks and monitors the signal. Based on the identified signal,
                  system estimates the direction of Drone and its GCC. An array
                  of receive antenna is used for estimation of direction of
                  signal.
                </p>
              </Accordion>
              <Accordion title="Video based Drone Identification & Tracking (VDIT)">
                <p className=" dark:text-white text-black">
                  The day and night camera sensors are mounted on an automatic
                  servo-based positioning system. This system receives commands
                  for position from RFDD. Once positioned in the direction of
                  interest, captures video and images of drone. VDIT is capable
                  of capturing and tracking video up to a range of 3 Km. Video
                  feeds are given to software module and video processing
                  algorithms in the software automatically confirm the presence
                  of drone and imitate tracking.
                </p>
              </Accordion>
              <Accordion title="RADAR">
                <p className=" dark:text-white vtext-black">
                  Detection of autonomous drones (flying without a link between
                  drone and operator) using RFDD is not possible. RADAR forms
                  the best choice to detect such threats. An X band 3D RADAR
                  detects the drones as per the max range chosen and provides
                  precise data about the target coordinates. RADAR provides both
                  Azimuth and elevation data of the drone. The feed from the
                  RADAR is integrated to the data fusion center for effective
                  remote monitoring of the threats.
                </p>
              </Accordion>
              <Accordion title="Data fusion and Command Center (DFCC)">
                <p className=" dark:text-white text-black">
                  User interface presents the comprehensive picture of threat
                  situation. Data from RFDD, VDIT and RADAR is integrated at the
                  command center. Detection and classification algorithms based
                  on RF data as well as visual data are built into this system.
                  An integrated display system enables the display of the threat
                  situation. This display system integrates the Map with zones
                  of threat. Provision to define the area of monitor, zone of
                  threat, zone of identification of threat etc are given in the
                  console. Spectrum and waterfall screens are also part of the
                  software, which provide the complete picture of the detected
                  emissions. A list of detected signals and Parameters such as
                  Frequency and type of drone etc are displayed.
                </p>
              </Accordion>
              <Accordion title="Drone RF Jammer (DRFJ)">
                <p className=" dark:text-white text-black">
                  Drone RF Jammer (DRFJ) is capable to disable the link between
                  GCC and Drone, by jamming simultaneously ISM bands, GNSS
                  signals, mobile signal and any other intercepted frequencies.
                  The frequencies detected by RFDD are automatically taken and
                  jamming waveforms are generated and radiated using the
                  directional antennas. The system also supports user configured
                  frequency to carry out the jamming action. A provision to
                  manually feed the jammer frequencies is also given.
                </p>
              </Accordion>
              <Accordion title="Hard kill">
                <p className=" dark:text-white text-black">
                  ZADS is offered with hard kill options. Kinetics based kill
                  and a Net based drone catcher are the two options available in
                  hard kill. Kinetic based neutralization is supplied with a gun
                  which can auto align to the target and fire bullets against
                  the target to destroy the same physically. In order to capture
                  the drone and land it at a safe place, net-based drone capture
                  option can be employed. For this option, a dedicated drone
                  with a hanging net will be launched to capture the rogue
                  drone. This option is suitable for small rogue drones carrying
                  potentially damaging explosives.
                </p>
              </Accordion>
            </div>
            {/*-----AD-Gallery----*/}
            <AdGallery />
            {/*---AD-Gallery close---*/}
            {/*----Accordion close----*/}
            {/*----modules declaration close----*/}
          </div>
        </div>

        {/* Right side with scrollable content close */}
      </div>

      {/*----Video----*/}
      <div className="text-center mt-[6%] dark:bg-black bg-gray-200 max-[600px]:p-3">
        <div className="mb-[3%]">
          <h2 className="text-2xl dark:text-white text-black font-bold underline max-[1000px]:mt-[24%]">
            Counter Drone System - Product Video
          </h2>
        </div>

        <div className="inline-grid w-full h-auto px-4">
          <div className="relative pt-[56.25%] w-full h-0 overflow-hidden">
            {/* 16:9 aspect ratio (56.25%) */}
            <iframe
              title="About video"
              src="https://www.youtube.com/embed/ed_za5hk9rs"
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

export default AntidroneSystem;
