import React, { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import BottomSheet from "../components/BottomSheet";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

const products = [
  {
    id: "1",
    name: "Organic Bananas",
    price: 2.99,
    weight: "1 bunch (5-7 pieces)",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Fresh Avocados",
    price: 4.99,
    weight: "2 pieces",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Red Bell Peppers",
    price: 1.99,
    weight: "2 pieces",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Organic Strawberries",
    price: 5.99,
    weight: "1 lb package",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const keywords = ["food", "grocery", "meat", "drinks", "essentials"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000); // Change keyword every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      name: "Food",
      time: "25 mins",
      image: "src/assets/img/food.png",
      span: 1,
    },
    {
      name: "Mart",
      time: "20 mins",
      image: "src/assets/img/mart.png",
      span: 1,
    },
    {
      name: "Courier",
      time: "30 mins",
      image: "src/assets/img/courier.png",
      span: 1,
    },
    {
      name: "Meat",
      time: "",
      image: "src/assets/img/meat.png",
      span: 1,
    },
    {
      name: "See More",
      time: "medicine,fashion,etc.",
      image: "src/assets/img/see_more2.png",
      span: 2,
    },
  ];

  return (
    <div>

      <Link to={"/search"}>
        <div className="relative m-4">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              className=" shadow-md w-full py-2.5 pl-10 pr-12 rounded-lg text-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder=""
            />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <span>Search for </span>
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-block font-medium text-gray-700 dark:text-white"
              >
                {keywords[index]}
              </motion.span>
            </div>
          </div>
          <Filter
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </Link>

      {/* category */}
      <div className="grid grid-cols-3 gap-2 m-4">
        {categories.map((item, index) => (
          <div
            key={index}
            //     className={`relative rounded-xl p-3 shadow-lg flex flex-col justify-between items-start h-36
            // col-span-${item.span}`} // Dynamic column span
            className={`relative rounded-xl p-3 shadow-lg flex flex-col justify-between items-start h-36 ${
              item.span === 2 ? "col-span-2" : "col-span-1"
            }`}
          >
            
            <div>
              <h3 className="text-lg font-semibold ">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
            {item.image && (
              <img
                src={item.image}
                className="absolute bottom-0 right-0 w-24 h-24 object-contain rounded-lg"
              />
            )}
          </div>
        ))}
      </div>

      {/* <CategoryBar /> */}

      <div className="p-4">
        <Carousel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600"
            alt="Fresh vegetables"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/40 flex items-center">
            <div className="px-8 text-white">
              <h2 className="text-4xl font-bold mb-4">
                Fresh Groceries,
                <br />
                Deliver on time
              </h2>
              <p className="text-lg mb-6">
                Pre-order now for next-day delivery
              </p>
              <button className="bg-white  text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                callBack={(data) => {
                  if (data == "open_details") {
                    setIsOpen(true);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p className="text-gray-900 dark:text-white text-lg">
          Hello from Bottom Sheet!
        </p>
      </BottomSheet>
    </div>
  );
}
