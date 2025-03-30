import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AlignRight,
  CalendarFold,
  CircleUser,
  Home,
  Search,
  ShoppingBag,
  ShoppingBasket,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Search", icon: Search, path: "/search" },
  // { name: "Cart", icon: ShoppingBag, path: "/cart" },
  { name: "Orders", icon: CalendarFold, path: "/orders" },
  { name: "Account", icon: AlignRight, path: "/profile" },
];

export default function MobileNav() {
  const location = useLocation();
  const { state } = useCart();
  const itemCount = state.items.length;

  return (
    <div className="relative">
      <nav className="rounded-t-3xl fixed bottom-0 inset-x-0 bg-white dark:bg-emerald-900/20 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 lg:hidden h-14">
        <div className="grid grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="flex flex-col items-center justify-center h-14 text-xs font-medium"
              >
                {/* <div className={`relative ${isActive ? 'text-emerald-600' : 'text-gray-600 dark:text-gray-300'}`}> */}
                <div
                  className={`relative ${
                    item.name === "Cart" &&
                    "-translate-y-3 rounded-full bg-emerald-700 shadow-md p-4"
                  } ${
                    isActive
                      ? item.name === "Cart" ? "text-white dark:text-white" : "text-emerald-600"
                      : item.name === "Cart" ? "text-gray-300 dark:text-gray-300" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <Icon
                    className={item.name === "Cart" ? "h-8 w-8" : "h-6 w-6"}
                  />
                  {item.name === "Cart" && itemCount > 0 && (
                    <span className="absolute top-0 right-0 bg-emerald-500 text-white dark:bg-white dark:text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                {/* {item.name != 'Cart' && (
                  <span className={`mt-1 ${isActive ? 'text-emerald-600' : 'text-gray-600 dark:text-gray-300'}`}>
                    {item.name}
                  </span>
                )} */}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
