import React from "react";

import banner from "../Images/banner.jpg";
import csws from "../Images/trikaal-laser-csws-zen.jpg";
import { FaHandPointRight } from "react-icons/fa";
const CornerShoot = () => {
  return (
    <div>
      {/*----banner image----*/}
      <div className="relative">
        <img src={banner} className="w-full h-full" alt="banner" />
        <div className="text-center">
          <h2 className="text-4xl text-white uppercase font-extrabold py-[1%]">
            Corner Shoot
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
            src={csws}
            alt="Fixed Image"
            className="h-auto object-cover min-w-[300px] max-[1000px]:w-full"
          />
        </div>

        {/* Right side with scrollable content */}
        <div className="flex-grow overflow-y-auto text-white">
          <div className="container mx-auto p-4 space-y-9">
            {/* Your content goes here */}
            <h1 className="text-3xl font-bold mb-4 underline text-center py-6">
              Corner Shoot
            </h1>

            <div>
              <h2 className="text-2xl text-[#0094bc] font-bold mb-3">
                CornerShot Weapon System - Zen CSWS TRIKAAL
              </h2>
              <p className="text-lg">
                Zen CSWS TRIKAAL CornerShot Weapon System facilitates shooting
                around corners, over the top or over walls, without exposing the
                firer. It helps fire accurately in darkness and low light
                conditions and also facilitates firing from standing, kneeling,
                hip as well as lying positions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-[#0094bc] font-bold mb-3">
                ShootEdge®
              </h2>
              <p className="text-lg">
                ShootEdge® is a special purpose adapter for Hand Guns (Pistols)
                which aids in viewing and shooting about a corner without
                exposing the shooter to the target. Functionality: ShootEdge has
                been designed to facilitate shooting with pistols or UBGL around
                corners, over the top of the walls and from under low gaps
                without the user being exposed.
              </p>
            </div>

            {/*----modules declaration close----*/}
          </div>
        </div>
        {/* Right side with scrollable content close */}
      </div>
    </div>
  );
};

export default CornerShoot;
