import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
// Import your images here
import image1 from "../Images/banner.jpg";
import image2 from "../Images/zen-ctc.webp";
import image3 from "../Images/cisr.webp";
import image4 from "../Images/tactical-engagement-simulator.webp";
import image5 from "../Images/atgm.webp";
import image13 from "../Images/zen-counter-drone_system.jpg";
import image14 from "../Images/counter_drone-system.jpg";
import image15 from "../Images/zen-anti-drone-hard-kill-l70.jpg";
import image21 from "../Images/zen-wgs.webp";
import image22 from "../Images/zen-ctc.webp";

import image31 from "../Images/cisr.webp";
import image32 from "../Images/zen-ctsr.webp";
import image33 from "../Images/air_to_ground.webp";
import image34 from "../Images/mcs.webp";
import image35 from "../Images/multi-functional-target-system.webp";
import image41 from "../Images/tactical-engagement-simulator.webp";
import image42 from "../Images/hand-grenade.webp";
import image43 from "../Images/acts.webp";
import image51 from "../Images/atgm.webp";
import image52 from "../Images/awesim.webp";
import image53 from "../Images/81mm-mis.webp";
import image54 from "../Images/3ads.webp";
import image55 from "../Images/agl.webp";
import image56 from "../Images/dts.webp";
import image57 from "../Images/cgs.webp";
import image58 from "../Images/t90ds.webp";
import image59 from "../Images/mmg.webp";
import image60 from "../Images/uav.webp";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Display one slide at a time
  slidesToScroll: 1, // Scroll one slide at a time
  // prevArrow: <CustomPrevArrow />,
  // nextArrow: <CustomNextArrow />,
  arrows: true,
};

const products = [
  {
    id: 1,
    heading: "Anti Drone System Gallery",
    images: [image1],
    product: "Anti Drone System",
    description:
      "Anti Drone System works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization of the threat through jamming the Drone communication.",

    pictures: [
      {
        img: image13,
        description:
          "Anti Drone System from Zen Technologies works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization ....",
        url: "",
      },
      {
        img: image14,
        description:
          "Anti Drone System from Zen Technologies works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization ....",
        url: "",
      },
      {
        img: image15,
        description:
          "Anti Drone System from Zen Technologies works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization ....",
        url: "",
      },
    ],
  },
  {
    id: 2,
    heading: "CTC Gallery",
    images: [image2],
    product: "Combat Training Center",
    description:
      "One-stop solution for 24/7 combat readiness, CTC integrates live fire, live instrumented, virtual and constructive domains into a common operating picture.",
    pictures: [
      {
        img: image21,
        description:
          "Combat ready soldiers are fundamental for the security and defense of the country. No matter where or when armed forces are deployed, the skills of a fighting force must constantly be refined and...",
        url: "URL for Image 1",
      },
      {
        img: image22,
        description:
          "Zen WGS provides doctrine-neutral solutions for Joint-Services/Combined and standalone operations. The gen-next constructive simulation....",
        url: "URL for Image 2",
      },
    ],
  },
  {
    id: 3,
    heading: "Live Ranges Gallery",
    images: [image3],
    product: "Live Ranges",
    description:
      "Smart firing ranges offer most realistic live-fire training for indoor and outdoor ranges. The containerized ranges deliver safety, firing convenience and easy portability.",
    pictures: [
      {
        img: image31,
        header: "Containerised Indoor Shooting Range (CISR)",
        description:
          "CISR is a self-contained, transportable, live-fire shooting facility. It is designed and built to include the target retrieval system/firearm judgmental training video simulator or to serve... ",
        url: "https://www.zentechnologies.com/cisr-containerised-indoor-shooting-range.php",
      },
      {
        img: image32,
        header: "Containerised Tubular Shooting Range (CTSR)",
        description:
          "Zen CTSR is a secure indoor substitute for live firing. It is self-contained, transportable and reduces considerably the area required for a range.Two....",
        url: "https://www.zentechnologies.com/ctsr-containerised-tubular-shooting-range.php",
      },
      {
        img: image33,
        header: "Air-to-Ground Firing Range Scoring System",
        description:
          "Zen Air-to-Ground Firing Range Scoring System has been designed to provide air-to-ground weapons delivery training area a variety of targets which can be deployed...",
        url: "https://www.zentechnologies.com/air-to-ground-firing-range-scoring-system.php",
      },
      {
        img: image34,
        header: "Master Control Station for Live-Firing Ranges (MCS)",
        description:
          "Zen Master Control Station (Zen MCS) is a Live Firing Range Control System that enables display and control for all targets in the range.Type of targets that are displayed",
        url: "https://www.zentechnologies.com/zen-master-control-station-for-live-firing-ranges.php",
      },
      {
        img: image35,
        header: "Multi-Functional Target System (MFTS®)",
        description:
          "Zen MFTS® is an electro-mechanical system of versatile targets which are programmable from the firers end to perform various movements for firing practices...",
        url: "https://www.zentechnologies.com/zen-multi-functional-target-system.php",
      },
    ],
  },
  {
    id: 4,
    heading: "Live Simulation Gallery",
    images: [image4],
    product: "Live Simulation",
    description:
      "The laser instrumented tactical engagement simulator or Zen TacSim, offers realistic force on force mission rehearsal training.",
    pictures: [
      {
        img: image41,
        header: "TacSim® - Tactical Engagement Simulator",
        description:
          "Zen TacSim® trains soldiers to utilize the skills acquired during training in field craft, battle drills and live-fire practice while carrying out operational exercises.",
        url: "https://www.zentechnologies.com/tacsim-tactical-engagement-simulator.php",
      },
      {
        img: image42,
        header: "Hand Grenade Simulator (HE36S®)",
        description:
          "Zen HE36S® is a patented hand grenade simulator that helps trainees develop a high degree of mind-body coordination, essential for effectively..",
        url: "https://www.zentechnologies.com/zen_hand_grenade_simulator.html",
      },
      {
        img: image43,
        header: "Armour Combat Training System (ZEN ACTS™)",
        description:
          "The Zen ACTS is designed to meet the training requirements of the Mechanised Forces in field craft, battle drills....",
        url: "https://www.zentechnologies.com/armour-combat-training-system.php",
      },
    ],
  },
  {
    id: 5,
    heading: "Virtual Simulation Gallery",
    images: [image5],
    product: "Virtual Simulation",
    description:
      "Zen ATGM® Sim is an indoor simulator, designed and developed to meet the challenging training requirements of missile ..",
    pictures: [
      {
        img: image51,
        header: "Anti-Tank Guided Missile Simulator (ATGM® Sim)",
        description:
          "Zen ATGM® Sim is an indoor simulator, designed and developed to meet the challenging training requirements of missile pilots...",
        url: "https://www.zentechnologies.com/anti_tank_guided_missile_simulator.html",
      },
      {
        img: image52,
        header: "Advanced Weapons Simulator (AWeSim®)",
        description:
          "Zen AWeSim® is a state-of-the-art firearms simulator that recreates Small Arms firing range indoors. It is aimed at training recruits to....",
        url: "https://www.zentechnologies.com/zen_advanced_weapon_simulator.html",
      },
      {
        img: image53,
        header: "81mm Mortar Integrated Simulator (81mm MIS)",
        description:
          "Zen 81mm MIS is designed to enable the soldier to gain proficiency in operating and firing the 81 mm Mortar. The simulator...",
        url: "https://www.zentechnologies.com/zen_81mm_integrated_mortar_simulator.html",
      },
      {
        img: image54,
        header: "Anti-Aircraft Air Defence Simulator (3ADS)",
        description:
          "Zen 3ADS is designed to train operators on laying procedures in both simulated and field conditions as well as psycho-physiological training...",
        url: "https://www.zentechnologies.com/anti-aircraft-air-defence-simulator.php",
      },
      {
        img: image55,
        header: "Automatic Grenade Launcher Simulator (AGL Sim)",
        description:
          "Zen AGL Sim offers a complete training solution to the crew of an Automatic Grenade Launcher. The trainee-in-loop gets the benefit of near-real....",
        url: "https://www.zentechnologies.com/automatic-grenade-launcher-simulator.php",
      },
      {
        img: image56,
        header: "Driving Training Simulator (ZEN DTS®)",
        description:
          "ZEN DTS is a versatile, indoor training system for light, medium and heavy vehicle drivers. The simulator facilitates training in a....",
        url: "https://www.zentechnologies.com/zen_driving_training_simulator.html",
      },
      {
        img: image57,
        header: "Crew Gunnery Simulator for T-90 Tank (T-90 CGS)",
        description:
          "Zen T-90 CGS is a crew gunnery training simulator for both Commander and gunner trainees of Tank T-90. It provides the following training features ....",
        url: "https://www.zentechnologies.com/zen_t90_crew_gunnery_simulator.html",
      },
      {
        img: image58,
        header: "Driving Simulator for T-90 Tank (T-90 DS)",
        description:
          "Zen T-90 DS belongs to the stable of Armoured Vehicle Simulators developed by Zen. The simulator provides the following training features....",
        url: "https://www.zentechnologies.com/zen_t90_tank_driving_simulator.html",
      },
      {
        img: image59,
        header: "Medium Machine Gun Simulator (MMG Sim)",
        description:
          "Zen MMG Sim is an interactive indoor training aid to train MMG detachment numbers in techniques of engagement of various targets, fire control....",
        url: "https://www.zentechnologies.com/medium-machine-gun-simulator.php",
      },
      {
        img: image60,
        header: "UAV Mission Simulator (UAV Sim)",
        description:
          "Zen UAV Sim is a comprehensive system developed to train External Pilots, Internal Pilots, Mission Commanders, Observers/Special payload....",
        url: "https://www.zentechnologies.com/zen-uav-training-simulator.html",
      },
    ],
  },
];
const Solutions = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
      {images.map((item, index) => (
        <div key={index} className="">
          <img
            key={index}
            src={item.image}
            alt={`Product ${index + 1}`}
            className="h-80 w-full object-cover  rounded-tl-3xl rounded-br-3xl rounded-tr-3xl rounded-bl-3xl cursor-pointer transform hover:scale-105 transition duration-300  "
          />
        </div>
      ))}
    </div>
  );
};
const ProductDisplay = ({ product, info }) => {
  return (
    <div>
      <div className="flex-1">
        <h2 className="text-3xl text-black text-center mb-5 font-bold italic dark:text-white">
          Products
        </h2>
        <h2 className="text-2xl font-bold text-center text-[#0094bc] mb-6">
          {product.product}
        </h2>
        <p className="text-white text-center mb-4">{info}</p>
        <div className="flex justify-center">
          <img
            src={product.images[0]}
            alt={product.product}
            className="h-80 w-auto object-cover"
          />
        </div>
        {/* Pass the images of the current product */}

        <div className="text-center">
          <Link
            href={product.url}
            className="inline-block bg-[#0094bc] text-white font-bold px-4 py-2 w-[30%] mt-[4%] max-[600px]:w-[60%] rounded-full  hover:bg-blue-700 transition duration-300"
          >
            Know more
          </Link>
        </div>
      </div>
    </div>
  );
};

const RelatedProductInfo = ({ pictures, product, header }) => {
  return (
    <div className="solution">
      <div className="text-white flex-1">
        <h2 className="text-2xl font-bold mb-6 mt-[10%] max-[1100px]:mt-8 text-[#0094bc] text-center">
          {product}
        </h2>
        <Slider {...settings}>
          {pictures.map((picture, index) => (
            <div key={index}>
              <h2 className="text-2xl  dark:text-white text-black font-bold mb-6 text-center">
                {picture.header}
              </h2>
              <img
                src={picture.img}
                alt={`Product ${index + 1}`}
                className="h-80 w-full object-cover mx-auto rounded-tl-3xl rounded-br-3xl rounded-tr-3xl rounded-bl-3xl cursor-pointer transform hover:scale-105 transition duration-300"
              />

              <p className="text-center mt-20 mb-5 px-5 dark:text-white text-black font-bold">
                {picture.description}
              </p>
              <div className="text-center">
                <Link
                  to={picture.url}
                  className="w-[30%] inline-block bg-[#0094bc] text-white font-bold px-4 py-2 mt-4 rounded-full hover:bg-blue-700 transition duration-300 max-[600px]:w-[60%]"
                >
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const App = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleClick = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="pb-11">
      <h1
        data-aos="flip-up"
        className="text-center text-4xl font-extrabold underline dark:text-white max-[1100px]:mb-[3%]"
      >
        Solutions
      </h1>
      <div className="flex justify-between items-center max-[1100px]:flex-col w-full h-full px-4 ">
        <div data-aos="fade-left" className="flex-1 relative">
          <ProductDisplay product={products[currentProductIndex]} />
          <button
            onClick={handleClick}
            className="mt-4 bg-[#0094BC] absolute top-[40%] left-[43%] max-[1000px]:top-[44%] max-[1000px]:left-[37%] border-8 border-white rounded-full p-4 text-white font-bold inline-flex items-center"
          >
            <div className="">
              <ImPlus size={40} className="plus" />
            </div>
          </button>
        </div>
        <div
          data-aos="fade-right"
          className="w-1/2 max-[1100px]:w-full max-[1100px]:px-[5%]"
        >
          {/* Pass the slides of the related product */}
          <RelatedProductInfo
            info={products[currentProductIndex].relatedInfo}
            product={products[currentProductIndex].heading}
            description={products[currentProductIndex].description}
            pictures={products[currentProductIndex].pictures}
            header={products[currentProductIndex].header}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
