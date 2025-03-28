import React from 'react';
import { Package, Clock, MapPin, CreditCard, ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

const orderStatus = {
  processing: { color: 'text-blue-600', bgColor: 'bg-blue-50' },
  shipped: { color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  delivered: { color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
};

export default function OrderDetailsPage() {
  const { id } = useParams();
  
  const order = {
    id: 'ORD-2024-001',
    date: '2024-03-10T10:00:00Z',
    status: 'processing',
    total: 45.97,
    deliveryFee: 5.99,
    items: [
      {
        id: '1',
        name: 'Organic Bananas',
        price: 2.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: '2',
        name: 'Fresh Avocados',
        price: 4.99,
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800',
      },
    ],
    delivery: {
      address: '123 Main St, New York, NY 10001',
      instructions: 'Please leave at the front door',
      date: '2024-03-11',
      timeSlot: '9:00 AM - 11:00 AM',
    },
    payment: {
      method: 'Credit Card',
      last4: '4242',
    },
  };

  const status = orderStatus[order.status as keyof typeof orderStatus];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/orders"
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Orders
      </Link>

      <div className="bg-white dark:bg-emerald-900/20 rounded-lg shadow-sm overflow-hidden">
        {/* Order Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Order #{order.id}
            </h1>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${status.color} ${status.bgColor}`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
        </div>

        {/* Order Progress */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Package className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-900">Order Placed</p>
            </div>
            <div className="flex-1 h-1 bg-emerald-100 mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-400">Processing</p>
            </div>
            <div className="flex-1 h-1 bg-gray-100 mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-400">Delivered</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Details */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Delivery Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Delivery Address</p>
                <p className="text-gray-500">{order.delivery.address}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {order.delivery.instructions}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-gray-400 mt-1" />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Delivery Time</p>
                <p className="text-gray-500">
                  {order.delivery.date}, {order.delivery.timeSlot}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CreditCard className="h-5 w-5 text-gray-400 mt-1" />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Payment Method</p>
                <p className="text-gray-500">
                  {order.payment.method} ending in {order.payment.last4}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span>${order.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-gray-900 pt-2">
                <span>Total</span>
                <span>${(order.total + order.deliveryFee).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline">Download Invoice</Button>
        <Button>Track Order</Button>
      </div>
    </div>
  );
}