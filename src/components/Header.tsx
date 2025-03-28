import React, { useContext } from "react";
import { ShoppingCart, Menu, User, Moon, Sun, MapPin } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useThemeStore } from "../store/useThemeStore";

export default function Header() {
  // const { toggle, isOpen } = useSidebar();
  // const { isDarkMode, toggleTheme } = useThemeStore();

  // const { state } = useCart();
  // const itemCount = state.items.length;

  return (
    <header
      className={
        "sticky top-0 z-50 bg-white dark:bg-emerald-900/20 dark:bg-gray-800 shadow-sm lg:pl-64"
      }
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-600"
              onClick={toggle}
            >
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            {!isOpen && (
              <Link to={"/"}>
                <h1 className="ml-3 text-xl font-bold text-emerald-600">
                  Needs
                </h1>
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4 ">
            <div
              className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-600"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300 " />
              ) : (
                <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </div>

            <Link to={"/profile"}>
              <button className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-600 hidden lg:block">
                <User className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </Link>

            <Link to={"/cart"}>
              <button className="p-2 rounded-full hover:bg-gray-100 relative hover:dark:bg-gray-600 hidden lg:block">
                <ShoppingCart className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand Name */}
        <div className="text-2xl font-sans font-bold text-emerald-600 lg:hidden">Needs</div>

        {/* Location Selector */}
        <div className="relative ms-auto">
          <div className="flex items-center space-x-2">
            <MapPin className="h-7 w-7 text-emerald-600" />
            <div className="flex flex-col">
              <span className="text-xs font-light">Delivery to</span>
              <span className="text-sm font-bold">New York, USA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
