import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../Images/zen-banner-1.jpg";
import bg1 from "../Images/zen-banner-2.jpg";
import bg2 from "../Images/zen-banner-3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";

import Aos from "aos";
import "aos/dist/aos.css";
import pattern from "../Images/pattern.png";
const SliderNew = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg, bg1, bg2]; // Add more image paths as needed

  const headings = [
    "Are you combat ready?",
    "combat readyness is critical",
    "Are you combat ready?",
  ]; // Add corresponding headings
  const buttons = ["Read More", "Read More", "Read More"]; // Add corresponding descriptions
  const descriptions = [
    "Combat ready soldiers save lives and increase the chance of mission success. Zen Technologies builds training solutions that develop combat ready soldiers and counter-drone solutions for safer skies",
    "Combat ready soldiers save lives and increase the chance of mission success. Zen Technologies builds training solutions that develop combat ready soldiers and counter-drone solutions for safer skies",
    "Combat ready soldiers save lives and increase the chance of mission success. Zen Technologies builds training solutions that develop combat ready soldiers and counter-drone solutions for safer skies",
  ]; // Add corresponding button labels
  const delay = 5000; // Change slide

  const goToPrevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images.length, delay]);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 dark:bg-[rgba(20,20,22,1)] bg-gray-100 opacity-80 w-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="fade-down" className="text-white text-center">
              <h1
                data-aos="fade-right"
                className="text-5xl font-black uppercase text-black dark:text-white max-[600px]:text-2xl"
              >
                {headings[index]}
              </h1>
              <p className="my-8 text-2xl max-[600px]:text-md font-bold dark:text-white text-black max-[600px]:hidden text-center px-[10%] leading-[50px]">
                {descriptions[index]}
              </p>
              <button
                data-aos="fade-down"
                className="px-11 py-3 max-[600px]:mt-[10%] bg-[#0094BC] hover:bg-white hover:text-black inline-flex gap-2 text-lg rounded-full text-white "
              >
                {buttons[index]}
                <div className="pt-1">
                  <FaArrowRightLong size={22} />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 w-[60px] h-[60px] max-[600px]:hidden left-4 transform -translate-y-1/2 p-5 hover:bg-black rounded-full bg-[#0094BC]"
        onClick={goToPrevSlide}
      >
        <FaArrowLeftLong className="text-white w-22" />
      </button>
      <button
        className="absolute top-1/2 w-[60px] h-[60px] max-[600px]:hidden right-4 transform -translate-y-1/2  p-5 hover:bg-black rounded-full bg-[#0094BC]"
        onClick={goToNextSlide}
      >
        <FaArrowRightLong className="text-white w-22" />
      </button>
      <div>
        <div
          data-aos="fade-left"
          className="absolute top-0 pt-[14%] pl-[12%] max-[600px]:hidden"
        >
          <PiStarFourFill size={64} className="star text-white" />
        </div>
        <div
          data-aos="fade-right"
          className="absolute bottom-0 pr-[16%] right-0 pb-[22%] max-[600px]:hidden"
        >
          <PiStarFourFill size={64} className="star text-white" />
        </div>
      </div>
      <div>
        <img
          data-aos="fade-down"
          src={pattern}
          className="text-white absolute  w-full bottom-0 pb-11 max-[600px]:hidden"
          alt="pattern-img"
        />
      </div>
    </div>
  );
};

export default SliderNew;
