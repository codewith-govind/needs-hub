import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plus, Home, Briefcase, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

const addresses = [
  {
    id: '1',
    type: 'home',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    isDefault: true,
  },
  {
    id: '2',
    type: 'work',
    address: '456 Business Ave, Floor 12',
    city: 'New York',
    state: 'NY',
    zip: '10002',
    isDefault: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SelectAddressPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Delivery Address
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Select a delivery address or add a new one
        </p>
      </motion.div>

      <Link to="/address/new">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6 flex items-center text-emerald-600 dark:text-emerald-400"
        >
          <Plus className="h-5 w-5 mr-3" />
          <span>Add New Address</span>
        </motion.div>
      </Link>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {addresses.map((address) => (
          <motion.div
            key={address.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-emerald-900/20 dark:bg-gray-800 rounded-lg shadow-sm p-4 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {address.type === 'home' ? (
                  <Home className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Briefcase className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white capitalize">
                    {address.type}
                  </h3>
                  {address.isDefault && (
                    <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  {address.address}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Button className="w-full">
          <Navigation className="h-5 w-5 mr-2" />
          Use Current Location
        </Button>
      </motion.div>
    </div>
  );
}