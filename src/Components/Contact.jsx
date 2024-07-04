"use client";
import React, { useState } from "react";
import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import banner from "../Images/Contact.jpg";

const Contact = () => {
  const apiKey = "AIzaSyA8ps0BSVUYg141dNtXDgT8_V_V7p1Bu8I"; // Your actual API key here
  const addressCoordinates = { lat: 17.4531, lng: 78.4482 }; // Coordinates for the specific address

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      {/*----banner image----*/}
      <div className="w-full ">
        <img src={banner} className="w-full " alt="ctc" />
        <div className="dark:bg-[rgba(20,20,22,1)] bg-gray-100 opacity-80 w-full"></div>
      </div>
      <div className="text-center ">
        <h2 className="text-4xl dark:text-white text-black uppercase font-extrabold py-[1%]">
          Contact Us
        </h2>
      </div>
      {/*---form---*/}
      <div className="bg-gray-200 dark:bg-black flex items-center justify-center my-[4%]">
        <div className="w-full max-w-md bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#0094bc] text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*----our offices---*/}
      <APIProvider apiKey={apiKey}>
        <div className="flex flex-col md:flex-row w-full h-full mb-[2%]">
          {/* Left Side - Company Address */}
          <div className="w-full md:w-1/2 p-8 bg-gray-200 dark:bg-[rgba(20,20,22,1)] flex flex-col justify-center dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Our Company</h1>
            <p className="text-lg mb-2">B-42,</p>
            <p className="text-lg mb-2">Industrial Estate, Sanath Nagar,</p>
            <p className="text-lg mb-2">Hyderabad, Telangana,</p>
            <p className="text-lg mb-2">India - 500018</p>
            <p className="text-lg mt-4">Toll Free: 1-800-425-4094</p>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <Map
              mapContainerStyle={{ height: "100%", width: "100%" }}
              center={addressCoordinates} // Center the map on the address coordinates
              zoom={18} // Set the zoom level to focus on the address
            >
              <Marker position={addressCoordinates} />{" "}
              {/* Place a marker at the address */}
            </Map>
          </div>
        </div>
      </APIProvider>
    </div>
  );
};

export default Contact;
