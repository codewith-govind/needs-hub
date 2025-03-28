import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { state } = useCart();
  const deliveryFee = 5.99;
  const total = state.total + deliveryFee;

  if (state.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag className="h-16 w-16 text-gray-400 dark:text-gray-200 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
        <p className="text-gray-500 dark:text-gray-200">Add items to get started with your order</p>
        <button className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="font-medium dark:text-gray-300">${state.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Delivery Fee</span>
              <span className="font-medium dark:text-gray-300">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between text-base font-semibold dark:text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Link to={"/checkout"}>
            <button className="w-full mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700">
              Proceed to Checkout
            </button>
          </Link>
          
          <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-100">
            Delivery scheduled for tomorrow morning
          </p>
        </div>
      </div>
    </div>
  );
}