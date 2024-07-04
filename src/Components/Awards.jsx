import React, { useState } from "react";
import award1 from "../Images/award-1.jpg";
import award2 from "../Images/award-2.jpg";
import award4 from "../Images/award-3.jpg";
import award5 from "../Images/award-4.jpg";

const Awards = () => {
  // Sample data of images with thumbnails and larger images
  const galleryData = [
    {
      id: 1,
      thumbnail: award1,
      largeImage: award1,
      title: "Shri Devi Singh Tyagi Memorial Award - 2022",
      description:
        "Mr. Kishore Dutt Atluri wins 'IETE - Shri Devi Singh Tyagi Memorial Award - 2022",
    },
    {
      id: 2,
      thumbnail: award2,
      largeImage: award2,
      title: "Telangana State Intellectual Property Award 2021",
      description:
        " Zen Technologies has been awarded the winner of Telangana State Intellectual Property Award 2021 for IP Champions organized by CII in association with Government of Telangana for Best Portfolio in Small Entity Category.",
    },

    {
      id: 4,
      thumbnail: award4,
      largeImage: award4,
      title: "Best exhibitor-Gold award",
      description:
        "Zen Technologies participated in 16th India International Security Expo 2013 and won the best exhibitor-Gold award",
    },
    {
      id: 5,
      thumbnail: award5,
      largeImage: award5,
      title: "National Award for Zen",
      description:
        "Zen received the national award for successful commercialization of indigenous technology on Technology Day (2012) for its Overseas Driving Training Simulator",
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
        Awards
      </h2>
      {/* Render big image if selected */}
      {selectedImage && (
        <div className="relative w-[600px] h-[450px]">
          <img
            src={selectedImage.largeImage}
            className="absolute inset-0 w-full h-full object-cover flex items-center justify-center"
            alt="bigImage"
          />
          <div className="absolute bottom-0 mb-[-23%] w-full h-[150px] flex flex-col items-center justify-center text-center bg-black opacity-80">
            <h2 className="text-white text-2xl font-bold mb-3">
              {selectedImage.title}
            </h2>
            <p className="text-white text-md px-4">
              {selectedImage.description}
            </p>
          </div>
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
      <div className="flex items-center justify-center gap-5 mb-[10%] mt-[12%]">
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

export default Awards;
