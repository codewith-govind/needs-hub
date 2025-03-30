import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, text: "Get up to 25% off", subtext: "on all food orders" },
  { id: 2, text: "Free Delivery", subtext: "on orders above ₹299" },
  { id: 3, text: "Exclusive Deals", subtext: "for first-time users" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Slide Container */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
      >
        <p className="text-lg font-semibold text-emerald-600">{slides[index].text}</p>
        <p className="text-gray-500 text-sm">{slides[index].subtext}</p>
        <button
          className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        >
          Next
        </button>
      </motion.div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "bg-emerald-600 w-6" : "bg-gray-300 w-2"
            }`}
            animate={{ width: i === index ? 16 : 8 }} // Animated width change
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
