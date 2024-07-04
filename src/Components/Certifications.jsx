import React, { useState } from "react";
import banner from "../Images/banner.jpg";
import { FiChevronsRight } from "react-icons/fi";
import Footer from "./Footer";
const tabs = [
  {
    id: 1,
    title: "MSME Sustainable (ZED) Pledge Certificate",
    url: "https://www.zentechnologies.com/about_us/Zen-Technologies-MSME-Sustainable-(ZED)-Pledge-Certificate.pdf",
  },
  {
    id: 2,
    title: "CMMI Maturity Level 5",
    url: "https://www.zentechnologies.com/about_us/Zen-Technologies-CMMi-Level5-Certificate.pdf",
  },
  {
    id: 3,
    title: "ISO 9001:2015 (QMS)",
    url: "https://www.zentechnologies.com/about_us/Zen-Technologies-QMS-ISO-9001-2015-Certification.pdf",
  },
  {
    id: 4,
    title: "ISO/IEC 27001:2013 (ISMS)",
    url: "https://www.zentechnologies.com/about_us/Zen-Technologies-ISMS-ISOIEC-27001-2013-Certificate.pdf",
  },
];

const Certifications = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Close sidebar on mobile when a tab is clicked
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="">
        {/* Banner image */}
        <div className="relative">
          <img src={banner} className="w-full h-full" alt={activeTab.title} />
          <div className="text-center">
            <h2 className="text-4xl text-white uppercase font-extrabold">
              Certifications
            </h2>
          </div>
        </div>
        {/* Sidebar */}
        <div className="flex flex-col lg:flex-row items-center justify-center my-[3%]">
          {/* Burger icon for mobile */}
          <div className="min-[1000px]:hidden">
            <button onClick={toggleSidebar} className="bg-[#0094bc] m-[3%]">
              <FiChevronsRight size={24} className="text-white" />
            </button>
          </div>
          {/* Sidebar content */}
          <div
            className={`lg:w-1/4 bg-[#0094bc] p-4 ${
              sidebarOpen ? "block" : "hidden lg:block"
            }`}
          >
            <ul className="py-4">
              {tabs.map((tab) => (
                <a href={tab.url}>
                  {" "}
                  <li
                    key={tab.id}
                    onClick={() => handleTabClick(tab)}
                    className={`cursor-pointer mb-4 text-[#0094bc] text-md font-bold p-2 rounded-sm ${
                      tab === activeTab ? "bg-[#0094bc] text-white" : "bg-white"
                    }`}
                  >
                    {tab.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Certifications;
