import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import image1 from "../Images/anti-drone-system.jpg";
import image2 from "../Images/counter_drone-system.jpg";
import image3 from "../Images/zen-counter-drone_system.jpg";
import image4 from "../Images/zen_anti_drone_system.jpg";
import image5 from "../Images/zen-anti-drone-counter-drone-system.jpg";
import image6 from "../Images/zen_anti_drone_counter_drone_system.jpg";
import image7 from "../Images/zen-ctc.webp";
const products = [
  {
    id: 1,
    heading: "Anti Drone System",
    picture: image1,
    images: [image1, image2, image3, image4, image5, image6],
    relatedInfo:
      "Anti Drone System works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization of the threat through jamming the Drone communication",
    description:
      "Anti Drone System from Zen Technologies works on drone detection, Classification and tracking on passive surveillance, camera sensors and neutralization ....",
    url: "https://www.zentechnologies.com/anti-drone-system-counter-drone-cuas.php",
  },
  {
    id: 2,
    heading: "Product 2",
    images: [image7, image7, image7],
    relatedInfo: "Related information for Product 2",
  },
  {
    id: 3,
    heading: "Product 3",
    images: ["image8.jpg", "image9.jpg", "image10.jpg"],
    relatedInfo: "Related information for Product 2",
  },
  {
    id: 4,
    heading: "Product 4",
    images: ["image11.jpg", "image12.jpg", "image13.jpg"],
    relatedInfo: "Related information for Product 2",
  },
  {
    id: 5,
    heading: "Product 5",
    images: ["image14.jpg", "image15.jpg", "image16.jpg"],
    relatedInfo: "Related information for Product 2",
  },
];

const Solutions = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 relative">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className="h-36 w-36 object-cover rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm cursor-pointer transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black opacity-60 transition duration-300"></div>
        </div>
      ))}
    </div>
  );
};

const ProductDisplay = ({ product }) => {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-center text-[#0094bc] mb-11">
        {product.heading}
      </h2>
      <Solutions images={product.images} />
    </div>
  );
};

const RelatedProductInfo = ({ info, url, description }) => {
  return (
    <div className="text-white p-4 flex-1">
      <h3 className="text-2xl font-bold mb-8 text-[#0094bc] text-center">
        Product Information
      </h3>
      <p className="text-white">{info}</p>
      <p className="text-white my-6">{description}</p>
      <div className="text-center">
        <Link
          href={url}
          className="inline-block bg-[#0094bc] text-white font-bold px-4 py-2 w-[30%] mt-[4%] rounded-full  hover:bg-blue-700 transition duration-300"
        >
          Know more
        </Link>
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
    <div className="flex flex-col items-center">
      <h1 className="text-center text-white my-[5%] text-4xl font-extrabold underline ">
        Solutions
      </h1>
      <div className="flex justify-between w-full px-4">
        <div className="relative w-1/2">
          <ProductDisplay product={products[currentProductIndex]} />

          <button
            onClick={handleClick}
            className="mt-4 bg-[#0094BC] absolute top-[43%] left-[43%] border-8 border-white rounded-full p-4 text-white font-bold  inline-flex items-center"
          >
            <div className="">
              <ImPlus size={40} className="plus" />
            </div>
          </button>
        </div>
        <div className="w-1/2">
          <RelatedProductInfo
            info={products[currentProductIndex].relatedInfo}
            url={products[currentProductIndex].url}
            description={products[currentProductIndex].description}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
