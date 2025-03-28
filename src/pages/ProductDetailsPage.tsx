import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const product = {
  id: "1",
  name: "Organic Bananas",
  price: 2.99,
  weight: "1 bunch (5-7 pieces)",
  image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
  description: "Fresh organic bananas sourced directly from local farmers. Perfect ripeness guaranteed.",
  nutrition: {
    calories: "89 kcal",
    protein: "1.1g",
    carbs: "22.8g",
    fat: "0.3g",
  },
  rating: 4.5,
  reviews: 128,
};

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { state, dispatch } = useCart();
  const cartItem = state.items.find(item => item.id === id);
  const quantity = cartItem?.quantity || 0;

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 }
    });
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id! });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: id!, quantity: newQuantity } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-500">{product.weight}</p>
          </div>

          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 rounded-lg shadow-lg"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            
            {quantity === 0 ? (
              <button
                onClick={addToCart}
                className="px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(quantity - 1)}
                  className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-xl font-medium">{quantity}</span>
                <button
                  onClick={() => updateQuantity(quantity + 1)}
                  className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4">
            <h3 className="text-lg font-medium mb-2">Nutrition Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-gray-500 capitalize">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}