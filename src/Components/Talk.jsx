import React from "react";
import army from "../Images/section-half-bg-1.webp";
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { DiSublime } from "react-icons/di";
import { MdOutlineMail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
const Talk = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="800"
      className="mx-[3%] my-[8%] max-[600px]:my-[18%] relative"
    >
      <div className="">
        <img src={army} alt="army-img" />
      </div>
      {/*----talk----*/}
      <div className="px-8 py-[4%] dark:bg-[#1a1a1c] bg-gray-200 absolute right-0 top-[6%] max-[600px]:static max-[600px]:top-0">
        <h6 className="font-bold text-[#0094bc]">Talk to Us</h6>
        <h1 className="text-4xl max-[600px]:text-3xl mb-[6%] font-black dark:text-white text-black leading-[50px] my-[3%]">
          Unleash the Power of <br /> Zen Technology
        </h1>
        <div className="flex max-[600px]:flex-col gap-3 mb-5">
          {/*----first-input-----*/}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 bg-transparent relative w-full border dark:border-[rgba(57,57,59,1)] border-opacity-20 border-slate-500 rounded-md"
            />
            <span>
              <FaUser className="text-[#0094bc] absolute right-[6%] top-3" />
            </span>
          </div>
          {/*----first-input close-----*/}
          {/*----second input-----*/}
          <div className="relative w-full">
            <input
              type="mail"
              placeholder="Your Email"
              className="p-2 bg-transparent w-full border dark:border-[rgba(57,57,59,1)] border-opacity-20 border-slate-500 rounded-md"
            />
            <span>
              <SiMinutemailer className="text-[#0094bc] absolute right-[6%] top-3" />
            </span>
          </div>
          {/*-------second-input-close----*/}
        </div>
        {/*----flex-end----*/}
        <div className="relative row-span-3">
          <input
            type="text"
            placeholder="subject"
            className="p-2 bg-transparent w-full h-full border dark:border-[rgba(57,57,59,1)] border-opacity-20 border-slate-500 rounded-md"
          />
          <span>
            <DiSublime className="text-[#0094bc] absolute right-[4%] top-3" />
          </span>
        </div>
        {/*---text-area----*/}
        <div class="relative w-full mt-5">
          <textarea
            placeholder="Write Message..."
            name="message"
            className="min-h-[6.5rem] w-full rounded-5 p-2 bg-transparent border dark:border-[rgba(57,57,59,1)] border-opacity-20 border-slate-500 rounded-md"
          ></textarea>
          <span>
            <MdOutlineMail className="text-[#0094bc] absolute right-[4%] top-3" />
          </span>
        </div>
        {/*---button----*/}
        <button className="w-full p-2  bg-[#0094bc] rounded-md text-white font-extrabold mt-[3%]">
          SEND NOW
        </button>
      </div>
    </div>
  );
};

export default Talk;
