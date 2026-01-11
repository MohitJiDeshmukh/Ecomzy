import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700">
      <div className="h-20 max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src="../logo.png" className="h-12 sm:h-14" alt="Store Logo" />
        </NavLink>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-6 font-medium text-gray-700 dark:text-gray-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-green-600 transition"
            }
          >
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-green-600 text-white rounded-full w-5 h-5 flex justify-center items-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
