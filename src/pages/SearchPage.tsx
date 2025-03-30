import React, { useState } from 'react';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import ProductCard from '../components/ProductCard';

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

const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery'];
const sortOptions = ['Popularity', 'Price: Low to High', 'Price: High to Low'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Popularity');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={() => setIsFilterOpen(true)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <SlidersHorizontal className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Filter Modal */}
      <Dialog
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white dark:bg-emerald-900/20 p-6">
            <Dialog.Title className="text-lg font-semibold mb-4">Filters</Dialog.Title>
            
            <div className="space-y-6">
              {/* Sort Options */}
              <div>
                <h3 className="font-medium mb-2">Sort By</h3>
                {sortOptions.map(option => (
                  <label key={option} className="flex items-center space-x-2 py-2">
                    <input
                      type="radio"
                      checked={selectedSort === option}
                      onChange={() => setSelectedSort(option)}
                      className="text-emerald-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
              >
                Apply Filters
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}