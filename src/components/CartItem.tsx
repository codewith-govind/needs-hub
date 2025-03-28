import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  quantity: number;
}

export default function CartItem({ id, name, price, image, weight, quantity }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-100">{weight}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${(price * quantity).toFixed(2)}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(quantity - 1)}
              className="p-1 rounded-full bg-emerald-100 dark:bg-gray-600 text-emerald-600  hover:bg-emerald-200"
            >
              <Minus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <span className="w-8 text-center text-gray-600 dark:text-gray-300">{quantity}</span>
            <button
              onClick={() => updateQuantity(quantity + 1)}
              className="p-1 rounded-full bg-emerald-100 dark:bg-gray-600 text-emerald-600 hover:bg-emerald-200"
            >
              <Plus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
              className="p-1 rounded-full text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 text-red dark:text-red-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}