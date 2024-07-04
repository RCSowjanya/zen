import React from "react";
import banner from "../Images/banner.jpg";
import ds from "../Images/ds-2.png";
import { FaHandPointRight } from "react-icons/fa";
const DrivingSimulator = () => {
  return (
    <div>
      {/*----banner image----*/}
      <div className="relative">
        <img src={banner} className="w-full h-full" alt="banner" />
        <div className="absolute inset-0 top-[50%] left-[40%] transform translate[-50%,-45%]">
          <h2 className="text-4xl text-white uppercase font-extrabold ">
            Driving Simulator
          </h2>
        </div>
      </div>
      {/*---banner image close----*/}
      {/*----product description----*/}
      {/*-----left side image and right side scrollable content---*/}
      <div className="flex flex-col min-[1000px]:flex-row h-[600px]">
        {/* Left side with fixed image */}
        <div className="flex-none">
          <img
            src={ds}
            alt="Fixed Image"
            className="h-auto object-cover min-w-[300px] max-[1000px]:w-full"
          />
        </div>

        {/* Right side with scrollable content */}
        <div className="flex-grow overflow-y-auto text-white">
          <div className="container mx-auto p-4 space-y-9">
            {/* Your content goes here */}
            <h1 className="text-3xl font-bold mb-4 underline text-center py-6">
              Driving Simulator
            </h1>
            <p className="text-lg">
              Zen DS is a versatile indoor, classroom driver training simulator.
              The simulator of Light, Medium and Heavy vehicles come with the
              option of either Left or Right Hand drive. The basic system is
              supplied with a single Instructor Station and a Driver Station but
              it has facility to control up to 10 Driver Stations of various
              combinations of vehicles individually or simultaneously.
            </p>

            <p className="text-lg">
              Zen car driving simulator is ideal for institutes imparting basic
              training for aspirant, drivers. The car simulator, which is a
              light vehicle driver simulator, is designed exclusively for
              driving schools. The car driving simulator is portable and
              institutes employing simulators can impart training effectively
              and cut trainees’ hours of actual training on road.
            </p>

            <div>
              <h3 className="text-2xl text-[#0094bc] font-extrabold mb-[4%]">
                Zen Driving Simulator Key Features:
              </h3>
              <div className="flex gap-4 mb-3">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Provides basic training as well as enhances driving skills on
                  Light, Medium and Heavy vehicles
                </p>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Has real dashboard assembly and controls, instrumentation and
                  transmission
                </p>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Offers realistic operating environment and ergonomics</p>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Includes intelligent Traffic Models in driving scenes</p>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Provides a variety of terrains and driving conditions</p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Allows creation of environmental conditions like rain, fog,
                  snowfall and intensity of light
                </p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Modular training setup increases levels of difficulty for
                  trainees
                </p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Training can be conducted at different stations with different
                  exercises simultaneously
                </p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>Training pace can be set to suit trainees</p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  Record/playback facility can be used to detect errors of each
                  trainee
                </p>
              </div>
              <div className="flex gap-4">
                <span className="">
                  <FaHandPointRight />
                </span>
                <p>
                  System is capable of giving out progress reports of each
                  trainee
                </p>
              </div>
            </div>
            {/*----modules declaration close----*/}
          </div>
        </div>
        {/* Right side with scrollable content close */}
      </div>
      {/*----Video----*/}
      <div className="text-center mt-[6%]">
        <div className="mb-[3%]">
          <h2 className="text-2xl text-white font-bold underline">
            Driving Simulator - Product Video
          </h2>
        </div>
        <div className="inline-grid">
          <iframe
            title="About video"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/96yElyQGd3I?si=Dlx9hQi81E5CUKvU"
            allowFullScreen
            className="block object-cover mb-[5%]"
          />
        </div>
      </div>
      {/*--video closed---*/}

      {/*--left side image and right side scrollable content close---*/}
    </div>
  );
};

export default DrivingSimulator;
