import React, { useState } from "react";
import banner from "../Images/banner.jpg";
import { FaRegFilePdf } from "react-icons/fa";
const PDFFiles = [
  {
    name: "JK Police Inducts Indigenous Pistols, 2 More Modern Weapon Systems To Enhance Firepower",
    subname: "Republicworld",
    url: "https://www.zentechnologies.com/assets/uploads/files/jk-police-inducts-indigenous-shootedge-to-enhance-firepower.pdf",
  },
  {
    name: "10 Best Companies of Drone in India",
    subname: "Inventiva",
    url: "https://www.zentechnologies.com/assets/uploads/files/top-10-companies-of-drone-in-india.pdf",
  },
  {
    name: "CISF undergo training on Zen CTSR",
    subname: "Hindustan Times",
    url: "https://www.zentechnologies.com/assets/uploads/files/7bead-zen-technologies-hindustan-times-e-paper-ctsr.pdf",
  },
  {
    name: "University of Hyderabad: MoU with Zen Technologie",
    subname: "UoH Herald",
    url: "https://www.zentechnologies.com/zen-in-the-news/university-of-hyderabad-mou-with-zen-technologies-uohherald.pdf",
  },
  {
    name: "Zen Technologies exports to Egypt",
    subname: "Vayu",
    url: "https://www.zentechnologies.com/zen-in-the-news/Zen-Technologies-exports-to-Egypt-Vayu.pdf",
  },
  {
    name: "Where security forces learn how to shoot",
    subname: "The New Indian Express",
    url: "https://www.zentechnologies.com/zen-in-the-news/Zen-Technologies-Where-security-forces-learn-how-to-shoot-The-New-Indian-Express.pdf",
  },
  {
    name: "Indian simulation specialist Zen Technologies to focus overseas",
    subname: "IHS Jane's 360",
    url: "https://www.zentechnologies.com/zen-in-the-news/Indian-simulation-specialist-Zen-Technologies-to-focus-overseas-IHS-Jane-360.pdf",
  },
  {
    name: "We bank on design & development capabilities to grow to next level: Ashok Atluri",
    subname: "Business Standard",
    url: "https://www.zentechnologies.com/zen-in-the-news/ashok-atluri-zen-technologies-business-standard.pdf",
  },
  {
    name: "Defence sector offers huge opportunities for SMEs: Ashok Atluri",
    subname: "The Hitavada",
    url: "https://www.zentechnologies.com/zen-in-the-news/Zen-Technologies-Egypt-Order-Business-Standard.pdf",
  },
  {
    name: "Defence Procurement Policy 2016: Ashok Atluri",
    subname: "Dailyexcelsior",
    url: "https://www.zentechnologies.com/zen-in-the-news/Defence-Procurement-Policy-2016-Ashok-Atluri-Dailyexcelsior.pdf",
  },
  {
    name: "Zen Technologies Unveil Combat Training Centre at Defexpo India 2016",
    subname: "Homelandmag",
    url: "https://www.zentechnologies.com/defexpo2016/zen-technologies-ctc-defexpo-2016-homelandmag.pdf",
  },
  {
    name: "Zen Technologies Defexpo 2016 Media Coverage Report",
    subname: "Media",
    url: "https://www.zentechnologies.com/defexpo2016/Zen-Technologies-DefExpo-2016-Media-Coverage-Report.pdf",
  },
];

const YouTubeVideos = [
  {
    id: "zfTuo39CueE?si=rC50akzCenuxvGY-",
    title:
      "Zen Technologies Chairman & MD Ashok Atluri On Good Q4 Earnings, Expansion Plans & Growth In FY25",
  },
  {
    id: "iiTZiLwjA0U?si=_ZTgXiMVdWjEQVRI",
    title: "Zen Tech To Set Up R&D Facility In Goa | BQ Prime",
  },
  {
    id: "D-8wb27CI8U?si=SEK3fjT7ik8guIyN",
    title:
      "Zen Technologies MD Ashok Atluri in an exclusive chats With ET Now Swadesh",
  },
  {
    id: "-JZciSo5Wm8?si=FgT35gA5bS-DzQh4",
    title: "Zen Technologies Plant Visit - Money Purse",
  },
  {
    id: "T4eWPS8Y1j4?si=6XQQ0Kg9YbCo884S",
    title:
      "AVM Arvind Verma (Retd) speaks on opportunities in ASEAN & BIMSTEC Countries for IDI at DefExpo 2022",
  },
  {
    id: "GOQnPF7Io7g?si=6ILRfo-DuPikEoav",
    title:
      "Adil Mahmood,VSM (Retd) & Arvind Verma speak to briefing them about indigenously developed solutions",
  },
  {
    id: "ZLGzaw0zmWc?si=ss9zyPgbc46yYS-7",
    title:
      "Ashok Atluri, CMD Zen Technologies speaks to ADU media at DefExpo 2022",
  },
  {
    id: "TmYCyU95myU?si=XRi2Uo_8MNKO5Qxc",
    title:
      "Ashok Atluri CMD Zen Technologies speaking to ADU at Defense & Security 2022",
  },
  {
    id: "bVgXGXpkZ4k?si=ARSNxZtgE6F8kXOS",
    title:
      "Automatic Grenade Launcher to Tactical Engagement Simulator, WATCH India’s New-Age Military Tech",
  },

  // Add more YouTube videos as needed
];

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex my-8 items-center justify-center rounded-lg">
      <button
        className={`px-4 py-2 uppercase font-bold ${
          activeTab === 1
            ? "bg-[#0094bc] text-white"
            : "bg-gray-200 text-gray-800"
        } `}
        onClick={() => setActiveTab(1)}
      >
        Media & News
      </button>
      <button
        className={`px-4 py-2 uppercase font-bold ${
          activeTab === 2
            ? "bg-[#0094bc] text-white"
            : "bg-gray-200 text-gray-800"
        } `}
        onClick={() => setActiveTab(2)}
      >
        Videos
      </button>
    </div>
  );
};
const NewsRoom = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner-img" className="w-full h-full" />
        <h1 className="text-3xl text-white font-bold absolute top-[50%] left-[40%]">
          Media Coverage
        </h1>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 ? (
        <div>
          {PDFFiles.map((file, index) => (
            <div key={index} className="shadow-xl mx-[4%] my-4">
              <div className="">
                <a href={file.url} target="_blank">
                  <div className="flex  items-center justify-between">
                    <div className="flex gap-3">
                      <FaRegFilePdf className="text-red-800" />
                      <p className="text-white text-md">{file.name}</p>
                    </div>
                    <div>
                      <p className="text-orange-600 text-md">{file.subname}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mx-[4%]">
          {YouTubeVideos.map((video, index) => (
            <div key={index} className="mb-[3%]">
              <iframe
                width="360"
                height="360"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-white">{video.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsRoom;
