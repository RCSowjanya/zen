import React, { useState } from "react";
import gallery1 from "../Images/counter_drone-system.jpg";
import gallery2 from "../Images/zen_anti_drone_counter_drone_system.jpg";

import gallery5 from "../Images/zen-anti-drone-hard-kill-mmg.jpg";

const AdGallery = () => {
  const galleryData = [
    {
      id: 1,
      thumbnail: gallery1,
      largeImage: gallery1,
    },
    {
      id: 2,
      thumbnail: gallery2,
      largeImage: gallery2,
    },

    {
      id: 3,
      thumbnail: gallery5,
      largeImage: gallery5,
    },
    // Add more images as needed
  ];
  const [selectedImage, setSelectedImage] = useState(galleryData[0]); // Default to the first image

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };
  const handlePrevClick = () => {
    const currentIndex = galleryData.findIndex(
      (image) => image.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedImage(galleryData[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = galleryData.findIndex(
      (image) => image.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedImage(galleryData[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-4xl underline font-extrabold dark:text-white text-black my-[6%]">
        Anti Drone System Gallery
      </h2>
      {/* Render big image if selected */}
      {selectedImage && (
        <div className="relative w-[450px] h-[450px]">
          <img
            src={selectedImage.largeImage}
            className="absolute inset-0 w-full h-full object-cover"
            alt="bigImage"
          />

          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-0 ml-[-13%] transform -translate-y-1/2 bg-[#0094bc] text-white px-2 py-1 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-0 mr-[-13%] transform -translate-y-1/2 bg-[#0094bc] text-white px-2 py-1 rounded-full"
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Render thumbnails */}
      <div className="flex items-center justify-center gap-5 mb-[10%] mt-[3%]">
        {galleryData.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image.thumbnail}
              className="w-[100px]"
              alt={`thumbnail_${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdGallery;
