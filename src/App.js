// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import AntidroneSystem from "./Components/AntidroneSystem";
import LiveRanges from "./Components/LiveRanges";
import LiveSimulation from "./Components/LiveSimulation";
import VirtualSimulation from "./Components/VirtualSimulation";
import Ctc from "./Components/Ctc";
import CornerShoot from "./Components/CornerShoot";
import DrivingSimulator from "./Components/DrivingSimulator";
import NewsRoom from "./Components/NewsRoom";
import Certifications from "./Components/Certifications";
import Benifits from "./Components/Benifits";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { IoMoon } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import Scrolltotop from "./Components/Scrolltotop";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Contact from "./Components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    } else {
      setDarkMode(savedMode === "dark");
    }
  }, []);

  const enableLightMode = () => {
    setDarkMode(false);
    localStorage.setItem("displayMode", "light");
  };

  const enableDarkMode = () => {
    setDarkMode(true);
    localStorage.setItem("displayMode", "dark");
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black bg-gray-200">
        <div>
          <div className="fixed right-7 bottom-[50%] z-[999] bg-gray-400 rounded-md flex flex-col  items-center space-y-3 border border-slate-300">
            <button
              onClick={enableLightMode}
              className="transition duration-300  text-black  font-bold p-3"
            >
              <IoMoon
                size={20}
                className={`${darkMode ? "text-yellow-500" : "text-black"}`}
              />
            </button>
            <div className="w-full border-t border-gray-300 my-1"></div>
            {/* Line separator */}
            <button
              onClick={enableDarkMode}
              className="transition duration-300  text-gray-100  font-bold p-3 rounded-md"
            >
              <FaRegLightbulb
                size={20}
                className={`${darkMode ? "text-black   " : "text-yellow-500"}`}
              />
            </button>
          </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/antidronesystem" element={<AntidroneSystem />} />
            <Route path="/liveranges" element={<LiveRanges />} />
            <Route path="/livesimulation" element={<LiveSimulation />} />
            <Route path="/virtualsimulation" element={<VirtualSimulation />} />
            <Route path="/ctc" element={<Ctc />} />
            <Route path="/cornershoot" element={<CornerShoot />} />
            <Route path="/drivingsimulator" element={<DrivingSimulator />} />
            <Route path="/newsroom" element={<NewsRoom />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/benifits" element={<Benifits />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Scrolltotop />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
