import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
}

export default function ProductCard({ id, name, price, image, weight }: ProductCardProps) {
  const { state, dispatch } = useCart();
  const cartItem = state.items.find(item => item.id === id);
  const quantity = cartItem?.quantity || 0;

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, image, weight, quantity: 1 }
    });
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 transition-transform hover:-translate-y-1">
      <Link to={"/product/" + id}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </Link>

      <div className="space-y-2">
        <Link to={"/product/" + id}>
          <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{weight}</p>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">${price.toFixed(2)}</p>
          {quantity === 0 ? (
            <button
              onClick={addToCart}
              className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(quantity - 1)}
                className="p-1 rounded-full bg-emerald-100 dark:bg-gray-600 text-emerald-600 hover:bg-emerald-200"
              >
                <Minus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
              <span className="text-gray-600 dark:text-gray-300">{quantity}</span>
              <button
                onClick={() => updateQuantity(quantity + 1)}
                className="p-1 rounded-full bg-emerald-100 dark:bg-gray-600 text-emerald-600 hover:bg-emerald-200"
              >
                <Plus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}