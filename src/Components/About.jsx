import React from "react";
import bg from "../Images/hero-3.webp";
import Scroll from "./Scroll";
import Awards from "./Awards";
const About = () => {
  return (
    <div className="main flex flex-col min-h-screen">
      <div className="relative">
        {/*---bg image---*/}
        <img src={bg} className="w-full max-[600px]:py-[17%]" alt="about-img" />
        {/*-----overlay------*/}
        <div className="absolute inset-0 flex justify-center items-center dark:bg-black bg-gray-200 opacity-60 transition duration-300"></div>
        {/*-----overlay-close-----*/}
        {/*---heading-div---*/}
        <div className="absolute top-[50%] left-[40%] max-[600px]:left-[25%]">
          <h1 className="text-5xl  uppercase dark:text-white text-black font-extrabold max-[600px]:py-11">
            About Us
          </h1>
          {/*----heading close----*/}
        </div>
        {/*---heading div close---*/}
      </div>
      {/*----relative div close----*/}
      <Scroll />
      <Awards />

      {/*---main div close---*/}
    </div>
  );
};

export default About;
