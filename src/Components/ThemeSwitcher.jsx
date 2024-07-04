// src/Components/ThemeSwitcher.js
import React from "react";
import { useTheme } from "../Components/ThemeContext ";
import { IoMoon } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
    >
      {theme === "dark" ? (
        <IoMoon size={22} className="" />
      ) : (
        <FaRegLightbulb size={22} className="" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
