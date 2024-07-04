import React from "react";
import pattern from "../Images/pattern-1.webp";
const SimpleMail = () => {
  return (
    <div className="bg-[#0094bc] py-[5%] mx-9 rounded-md  my-[6%] relative opacity-80">
      <h1 className="text-4xl max-[600px]:text-3xl text-center text-white font-black leading-[60px]">
        Have Question? Feel
        <br /> Free To Ask
      </h1>
      <div className="flex gap-3 max-[600px]:flex-col items-center justify-center mt-11 px-[10%]">
        <input
          type="email"
          placeholder="Enter Email"
          className="bg-white border-2 p-4 border-white  font-bold rounded-md w-[50%]  max-[600px]:w-full"
        />
        <button className="p-4 bg-[#0088bc] w-[25%] max-[600px]:w-full uppercase text-white border-2 border-white rounded-md font-bold ">
          Subscribe
        </button>
      </div>
      <div className="absolute right-4 bottom-0 move">
        <img src={pattern} alt="pattern" />
      </div>
    </div>
  );
};

export default SimpleMail;
