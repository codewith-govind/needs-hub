import React from 'react';
import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';


const products = [
  {
    id: "1",
    name: "Organic Bananas",
    price: 2.99,
    weight: "1 bunch (5-7 pieces)",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Fresh Avocados",
    price: 4.99,
    weight: "2 pieces",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Red Bell Peppers",
    price: 1.99,
    weight: "2 pieces",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Organic Strawberries",
    price: 5.99,
    weight: "1 lb package",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800"
  }
];

export default function HomePage() {
  return (
    <div>
      <Link to={"/search"}>
        <div className="flex-1 justify-between max-w-7xl mx-4 mt-3 mb-3">
          <div className="relative ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Needs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </Link>
      <CategoryBar />
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
              <h2 className="text-4xl font-bold mb-4">Fresh Groceries,<br />Deliver on time</h2>
              <p className="text-lg mb-6">Pre-order now for next-day delivery</p>
              <button className="bg-white  text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}