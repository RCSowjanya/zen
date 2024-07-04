import React, { useEffect } from "react";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerCategories = [
    {
      id: 1,
      mainHeading: "About Us",
      url: "/about",
      links: [
        {
          id: 1,
          text: "Awards",
          url: "",
        },
        {
          id: 2,
          text: "Board of Directors",
          url: "",
        },
        {
          id: 3,
          text: "Corporate Social Responsibility(CSR)",
          url: "",
        },
      ],
    },
    {
      id: 2,
      mainHeading: "Products",
      url: "",
      links: [
        { id: 1, text: "Anti Drone System (CUAS)", url: "/AntidroneSystem" },
        {
          id: 2,
          text: "CornerShoot",
          url: "/CornerShoot",
        },
        { id: 3, text: "Driving Simulator (DS)", url: "/DrivingSimulator" },
        { id: 4, text: "Live Ranges", url: "/LiveRanges" },
        { id: 5, text: "Live Simulation", url: "/LiveSimulation" },
        { id: 6, text: "Virtual Simulation", url: "/VirtualSimulation" },
      ],
    },
    {
      id: 3,
      mainHeading: "NewsRoom",
      url: "/NewsRoom",
      links: [
        { id: 1, text: "Media Coverage", url: "/NewsRoom" },
        {
          id: 2,
          text: "Events",
          url: "/",
        },
      ],
      subHeadings: [
        {
          subHeading: "Certifications",
          url: "/Certifications",
          links: [
            {
              id: 1,
              text: "CMMI Maturity Level 5",
              url: "https://www.zentechnologies.com/about_us/Zen-Technologies-MSME-Sustainable-(ZED)-Pledge-Certificate.pdf",
            },
            {
              id: 2,
              text: "ISO 9001:2015 (QMS)",
              url: "https://www.zentechnologies.com/about_us/Zen-Technologies-CMMi-Level5-Certificate.pdf",
            },
            {
              id: 3,
              text: "ISO/IEC 27001:2013 (ISMS)",
              url: "https://www.zentechnologies.com/about_us/Zen-Technologies-QMS-ISO-9001-2015-Certification.pdf",
            },
            {
              id: 4,
              text: "MSME Sustainable (ZED) Pledge Certificate",
              url: "https://www.zentechnologies.com/about_us/Zen-Technologies-ISMS-ISOIEC-27001-2013-Certificate.pdf",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      mainHeading: "Investors",
      links: [
        { id: 1, text: "Annual Reports", url: "/CSR" },
        { id: 2, text: "Corporate Governance", url: "/media-coverage" },
        { id: 3, text: "Investor Information", url: "/Events" },
      ],
      subHeadings: [
        {
          subHeading: "Blogs",
          links: [],
        },
      ],
    },
    {
      id: 5,
      mainHeading: "Careers",
      links: [{ id: 1, text: "Zen Employee Benifits", url: "/Benifits" }],
      subHeadings: [
        {
          subHeading: "Toll free number",
          links: [{ id: 1, text: "1-800-425-4094-(India)", url: "/" }],
        },
        {
          subHeading: "Send an Email :",
          links: [{ id: 1, text: "info@zentechnologies.com", url: "/" }],
        },
      ],
    },
  ];

  return (
    <footer className="dark:text-white dark:bg-[#1A1A1A] bg-gray-200 text-black border dark:border-t-white border-t-slate-300 ">
      <div className="mx-auto py-8 px-4">
        <div className="grid grid-cols-1 max-[1000px]:text-center lg:grid-cols-5">
          {/* Render footer categories */}
          {footerCategories.map((category, index) => (
            <div key={index}>
              <a href={category.url}>
                <h2 className="text-xl font-semibold mb-4 text-[#0094bc] uppercase cursor-pointer">
                  {category.mainHeading}
                </h2>
              </a>
              <ul>
                {/* Render main heading links */}
                {category.links &&
                  category.links.map((link) => (
                    <li key={link.id} className="mb-2">
                      <a
                        href={link.url}
                        className="dark:text-[#fff] text-black font-bold"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
              </ul>
              {/* Render subheading links if they exist */}
              {category.subHeadings &&
                category.subHeadings.map((subHeading) => (
                  <div key={subHeading.subHeading}>
                    {subHeading.subHeading &&
                      subHeading.subHeading.trim() !== "" && (
                        <div>
                          <a href={subHeading.url}>
                            <h3 className="text-xl font-semibold my-2 uppercase text-[#0094bc] mt-5">
                              {subHeading.subHeading}
                            </h3>
                          </a>
                          <ul>
                            {subHeading.links &&
                              subHeading.links.map((subLink) => (
                                <li
                                  key={subLink.id}
                                  className="mb-2 flex flex-wrap items-center max-[1000px]:justify-center"
                                >
                                  <a
                                    href={subLink.url}
                                    className="dark:text-[#fff] text-black font-bold"
                                  >
                                    {subLink.text}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      {/*---copy right----*/}
      <div className="flex items-center justify-between max-[1000px]:flex-col max-[1000px]:space-y-6 px-4 border dark:border-t-white border-t-slate-300 py-4">
        <div className="font-bold ">
          <p className="text-[14px]">
            Copyright© 2024 Zen Technologies Limited, All Rights Reserved.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-[#0094bc] font-bold mb-3">Follow Us</h4>
          <div className="flex gap-2">
            <FaFacebookF />
            <IoLogoYoutube />
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>
        <div className="flex gap-6 font-bold">
          <a
            href=""
            className="dark:border-b dark:border-b-white border-b border-b-slate-300"
          >
            Sitemap
          </a>
          <a
            href=""
            className="dark:border-b dark:border-b-white border-b border-b-slate-300"
          >
            PrivacyPolicies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
