import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../Images/Zen-Technologies-Limited.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (item, index) => {
    if (windowWidth < 1000 && item.dropdownItems) {
      toggleDropdown(index);
    } else {
      window.location.href = item.url;
    }
  };

  return (
    <nav className="absolute z-[999] left-0 right-0 bg-[#fff]">
      <div className="px-3 pt-4 w-full flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Zen-Logo" className="w-[275px] h-[30px]" />
          </a>
        </div>
        {/* Burger icon for mobile */}
        <div className="min-[1000px]:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <IoClose size={22} className="text-black" />
            ) : (
              <HiMenuAlt3 size={22} className="text-black" />
            )}
          </button>
        </div>
        {/* Nav items */}
        <div className="max-[1000px]:hidden min-[1001px]:flex ml-4">
          {NavItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="px-3 py-2 inline-flex text-md font-bold focus:outline-none uppercase text-black hover:text-[#ff681e] active:text-[#ff681e]"
                onClick={() => handleNavItemClick(item, index)}
                onMouseEnter={() => toggleDropdown(index)}
              >
                {item.title}
                {item.dropdownItems && <MdOutlineArrowDropDown />}
              </button>
              {activeDropdown === index && item.dropdownItems && (
                <div
                  className="absolute z-10 mt-2 w-96 bg-white text-bold text-slate-800 rounded-md shadow-lg"
                  onMouseLeave={closeDropdown}
                  style={{
                    display: activeDropdown === index ? "block" : "none",
                  }}
                >
                  <div className="py-1">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <div key={idx}>
                        <a
                          href={dropdownItem.url}
                          className="block px-4 py-2 text-sm text-gray-700"
                        >
                          {dropdownItem.title}
                        </a>
                        {dropdownItem.submenu && (
                          <div className="ml-6">
                            {dropdownItem.submenu.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.url}
                                className="block px-4 py-2 text-sm text-gray-700"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Responsive mobile menu */}
      <div className={`min-[1001px]:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {NavItems.map((item, index) => (
            <div key={index}>
              <button
                className={`text-black inline-flex px-3 py-2 rounded-md text-base font-medium hover:text-[#ff681e] ${
                  isDarkTheme ? "" : ""
                } focus:outline-none`}
                onClick={() => handleNavItemClick(item, index)}
              >
                {item.title}
                {item.dropdownItems && <MdOutlineArrowDropDown />}
              </button>
              {activeDropdown === index && item.dropdownItems && (
                <div>
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.url}
                      className="text-black block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none"
                    >
                      {dropdownItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
