import React from "react";
import { Apple, Carrot, Coffee, Cookie, Beef, Milk } from "lucide-react";

const categories = [
  { name: "Fruits", icon: Apple },
  { name: "Vegetables", icon: Carrot },
  { name: "Beverages", icon: Coffee },
  { name: "Snacks", icon: Cookie },
  { name: "Meat", icon: Beef },
  { name: "Dairy", icon: Milk },
];

export default function CategoryBar() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex flex-col items-center min-w-[4rem] text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors"
                >
                  <div className="p-2 rounded-full bg-emerald-50 dark:bg-gray-600">
                    <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <span className="mt-1 text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50 ">
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                  {/* <span className="text-2xl">{category.icon}</span> */}
                  <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
