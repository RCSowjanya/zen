import React from "react";
import logo1 from "../Images/armed-force-logo.webp";
import logo2 from "../Images/indian-army.webp";
import logo3 from "../Images/indian-coast-guard.webp";
import logo4 from "../Images/indian_navy_logo.webp";
import logo5 from "../Images/special-force.webp";
import logo6 from "../Images/begrade-of-the-guards.webp";
import { ImQuotesRight } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
const Testimonials = () => {
  const data = [
    {
      name: "Armed Forces Regiment",
      description:
        "It gives me immense pleasure to write about your prompt action and quality service provided by your highly trained and professional representative for providing service of T-90 basic and  crew Gunnery Simulator. The Gunnery simulators are of great help as it provides real time firing practices to our crew and also provide regular practice to new gunners joining the Regiment.",
      rating: 4,
      comment: "",
      img: logo1,
    },
    {
      name: "Special Forces",
      description:
        "Zen AWeSim has been working satisfactorily under the maintenances of Zen Technologies ltd. It has been very useful for training purpose and helps the trainees to attain perfection in weapon handling and weapon firing.",
      rating: 4,
      img: logo5,
    },
    {
      name: "Army Training Academy",
      description:
        " Multi-functional target system (Zen MFTS) helps us to prepare trainees for real-life situations through its standard and complex exercise of Reflex shooting with live fire. ",
      rating: 4,
      img: logo1,
    },
    {
      name: "Armed Forces",
      description:
        "The Zen Advanced Weapon Simulator, installed and commissioned by Zen Technologies limited, Hyderabad, has been functioning well and helping officers and sailors to improve their shooting skills in Tactical and Judgmental scenarios.",
      rating: 4,
      img: logo4,
    },
    {
      name: "Indian Army",
      description:
        "The crew gunnery simulator is of great help as it provides real-time firing experience and nullifies the need of FMR practice thus saving precious time and resources of the regiment.",
      rating: 4,
      comment: "Crew Gunnery Simulator",
      img: logo2,
    },
    {
      name: "Indian Coast Guard",
      description:
        "The system is user-friendly as it is loaded with 3D targets and video based maritime scenarios. It also allows trainees to train with different type of weapons and fire at moving targets.",
      rating: 4,
      comment: "Advanced Weapons Simulator",
      img: logo3,
    },
    {
      name: "Brigade of The Guards",
      description:
        "MFTS is very useful for trainees to attain perfection in weapon handling and firing. It is being used in outdoor firing with optimum use of ammunition and resources of the battalion",
      rating: 4,
      comment: "Multi Functional Target System",
      img: logo6,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000, // Adjust this breakpoint to your preference
        settings: {
          slidesToShow: 1, // Show only one testimonial at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      className="testmonials slider-container px-6"
    >
      <h1 className="underline mt-11 mb-24 text-4xl text-center dark:text-white text-black font-extrabold">
        Client Testimonials
      </h1>
      <Slider {...settings}>
        {data.map((testimonial, index) => (
          <div key={index} className="h-96 w-full max-[1000px]:h-full">
            <div className="w-full h-full rounded-5 duration-350 hover:transform translate-y-[.5rem] dark:bg-accent-700  p-[20px] max-[1000px]:p-0">
              <div className="w-full h-full dark:bg-[#1A1A1A] bg-gray-200 border  border-slate-300 dark:border-none rounded-lg flex flex-row items-center gap-5 justify-center pb-[10%] px-3 max-[600px]:flex-col ">
                <div className="relative">
                  <img
                    className="rounded-5 object-cover transparent"
                    src={testimonial.img}
                    alt={`testimonial-${index}`}
                  />
                  <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[primary-light] bg-[#0094bc] text-lg/[1] text-white">
                    <ImQuotesRight />
                  </span>
                </div>
                <div className="flex-1 h-full">
                  <h3 className="text-md font-bold leading-[1.25] pt-[10%] text-accent-900 max-[600px]:mt-9 dark:text-white text-black text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-white">{testimonial.comment}</p>
                  <div className="mt-2 min-h-[30px] text-primary">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span className="text-[#0094bc] text-xl" key={i}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 dark:text-white text-black font-bold">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
