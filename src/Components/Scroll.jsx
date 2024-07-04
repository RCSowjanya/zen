import React from "react";
import kishoredutt from "../Images/kishoredut.png";
import ashokdutt from "../Images/ashokdutt.jpg";
import Ravikumar from "../Images/Ravikumar.png";
import shilpa from "../Images/shilpa.png";
import army from "../Images/army.jpg";
const Scroll = () => {
  const data = [
    {
      id: 1,
      img: kishoredutt,
      name: "kishore Dutt Atluri",
      designation: "Founder, President & Joint",
      sub: "Managing Director",
    },
    {
      id: 2,
      img: ashokdutt,
      name: "Ashok Dutt Atluri",
      designation: "Chairman & Managing Director",
    },
    {
      id: 3,
      img: Ravikumar,
      name: "Mr.M.Ravi Kumar",
      designation: "Whole Time Director",
    },
    {
      id: 4,
      img: shilpa,
      name: "Ms.Shilpa Choudari",
      designation: "Whole Time Director",
    },
  ];
  return (
    <div>
      <div>
        {/*-----left side image and right side scrollable content---*/}
        <div className="flex max-[1000px]:flex-col  h-[600px] max-[1000px]:h-full">
          {/* Left side with fixed image */}
          <div className="flex-none">
            <img
              src={army}
              alt="Fixed Image"
              className="h-full object-cover min-w-[300px] max-[1000px]:min-w-full"
            />
          </div>

          {/* Right side with scrollable content */}
          <div className="flex-grow overflow-y-auto dark:text-white text-black">
            <div className="container mx-auto p-4 space-y-9">
              {/* Your content goes here */}
              <h1 className="text-3xl font-bold mb-4 underline text-center py-6">
                About Us
              </h1>
              <p className="text-lg font-bold">
                Incorporated in 1993, Zen Technologies Limited designs, develops
                and manufactures state-of-the-art Combat Training Solutions for
                the training of Defense & Security Forces worldwide and is a
                leader in providing Counter-Drone Solutions for safeguarding the
                borders, critical infrastructures etc. Zen Technologies is
                headquartered in Hyderabad, India with offices in India, UAE and
                USA.
              </p>

              <p className="text-lg font-bold">
                Zen Technologies has a portfolio of over 40 products designed
                and developed indigenously ranging from Live Fire, Live
                Instrumented, Virtual and Constructive training systems for
                individual and collective training and Counter Drone Solutions.
                With over 1,000 simulators and training systems shipped around
                the world, Zen Technologies is a proven leader in building
                training systems for developing and measuring Combat Readiness.
              </p>

              <p className="text-lg font-bold">
                Zen Technologies is built on strong R&D capabilities and has
                filed or received over 125 patents. Zen Technologies Limited is
                an ISO 9001:2015 (QMS), ISO/IEC 27001:2013 (ISMS) and CMMI
                Maturity Level 5 Company.
              </p>

              {/*----vision and mission---*/}
              <div className="flex gap-8 max-[600px]:flex-col mx-[3%] pt-[6%]">
                <div>
                  <h3 className="text-[#0094bc] uppercase text-xl font-bold mb-5">
                    vision
                  </h3>
                  <div className="border-2 dark:border-white border-slate-300  rounded-tr-[80px] rounded-bl-[80px]">
                    <p className="text-lg p-8 font-bold">
                      To be a leading player globally in providing Combat
                      Training and Counter Drone solutions to Armed,
                      Paramilitary, and Police Forces.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0094bc] uppercase text-xl font-bold mb-5">
                    mission
                  </h3>
                  <div className="border-2 dark:border-white border-slate-300  rounded-tr-[80px] rounded-bl-[80px]">
                    <p className="text-lg p-8 font-bold">
                      To provide Combat Training and Anti-Drone solutions
                      through innovative and cost-effective solutions.
                    </p>
                  </div>
                </div>
              </div>
              {/*---vision and mission close---*/}
              {/*----our Leadership----*/}
              <div className="">
                <h2 className="underline text-4xl pt-[8%] mb-[10%] text-center font-extrabold">
                  Our Leadership
                </h2>
                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 ">
                  {data.map((e, index) => {
                    return (
                      <div key={index} className="">
                        <div className="flex px-[3%] gap-7  items-center space-y-11">
                          <img src={e.img} className="w-24" alt="" />
                          <div className="">
                            <h3 className="text-xl font-bold">{e.name}</h3>
                            <h5 className="text-lg">{e.designation}</h5>
                            <p className="text-md">{e.sub}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-[#0094bc] w-[30%] text-white font-bold px-4 py-2  mt-[4%] rounded-full  hover:bg-blue-700 transition duration-300">
                  View All
                </button>
              </div>
              {/*---our Leadership close----*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
