import React from "react";
import banner from "../Images/banner.jpg";
const Products = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} className="" alt="banner" />
        <div className="absolute inset-0 top-1/2 left-0 transform translate-y-1/2">
          <h2 className="text-4xl text-white uppercase">Products</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
