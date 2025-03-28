import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface DeliverySlot {
  id: string;
  time: string;
  available: boolean;
}

const deliverySlots: DeliverySlot[] = [
  { id: '1', time: '7:00 AM - 9:00 AM', available: true },
  { id: '2', time: '9:00 AM - 11:00 AM', available: true },
  { id: '3', time: '11:00 AM - 1:00 PM', available: false },
];

const paymentMethods = [
  { id: 'card', name: 'Credit Card' },
  { id: 'upi', name: 'UPI' },
  { id: 'cod', name: 'Cash on Delivery' },
];

export default function CheckoutPage() {
  const { state } = useCart();
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const subtotal = state.total;
  const deliveryFee = 5.99;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Delivery Address */}
        <div className="bg-white dark:bg-emerald-900/20 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Slots */}
        <div className="bg-white dark:bg-emerald-900/20 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {deliverySlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.id)}
                className={`p-4 rounded-lg border text-center ${
                  selectedSlot === slot.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : slot.available
                    ? 'border-gray-200 dark:border-gray-700 hover:border-emerald-500'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 cursor-not-allowed'
                }`}
              >
                <span className={slot.available ? 'text-gray-900' : 'text-gray-400'}>
                  {slot.time}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-emerald-900/20 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-emerald-500"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-emerald-600"
                />
                <span className="ml-3">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-emerald-900/20 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Delivery Fee</span>
              <span className="font-medium">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}