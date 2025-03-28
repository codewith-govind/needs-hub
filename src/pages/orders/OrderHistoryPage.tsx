import { Clock, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'delivered';
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

const orders: Order[] = [
  {
    id: 'ORD001',
    date: '2024-03-10',
    status: 'processing',
    total: 45.97,
    items: [
      { name: 'Organic Bananas', quantity: 2, price: 2.99 },
      { name: 'Fresh Avocados', quantity: 3, price: 4.99 },
      { name: 'Red Bell Peppers', quantity: 4, price: 1.99 }
    ]
  },
  {
    id: 'ORD002',
    date: '2024-03-09',
    status: 'delivered',
    total: 32.95,
    items: [
      { name: 'Organic Strawberries', quantity: 2, price: 5.99 },
      { name: 'Fresh Avocados', quantity: 2, price: 4.99 }
    ]
  }
];

export default function OrderHistoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Order History</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-white">Order #{order.id}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className={`flex items-center ${
                order.status === 'processing' ? 'text-blue-600' : 'text-emerald-600'
              }`}>
                {order.status === 'processing' ? (
                  <Clock className="h-5 w-5 mr-2" />
                ) : (
                  <Package className="h-5 w-5 mr-2" />
                )}
                <span className="text-sm font-medium capitalize">
                  {order.status}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-300">{item.quantity}x</span>
                    <span className="ml-2 dark:text-white">{item.name}</span>
                  </div>
                  <span className="text-gray-900 drak:text-gray-300">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium drak:text-white">Total</span>
                <span className="font-medium drak:text-white">${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Link to={"/order/12"}>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View Details
                </button>
              </Link>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}