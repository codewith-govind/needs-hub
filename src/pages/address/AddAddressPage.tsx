import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapPin, Home, Briefcase, Building } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const addressTypes = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'other', icon: Building, label: 'Other' },
];

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

export default function AddAddressPage() {
  const [selectedType, setSelectedType] = useState('home');
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [address, setAddress] = useState({
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setMarkerPosition({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Add New Address
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Set your delivery location
        </p>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 rounded-lg overflow-hidden h-[300px]"
      >
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={defaultCenter}
            zoom={13}
            onClick={handleMapClick}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
        </LoadScript>
      </motion.div>

      {/* Address Type Selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Address Type
        </label>
        <div className="grid grid-cols-3 gap-4">
          {addressTypes.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(id)}
              className={`p-4 rounded-lg border ${
                selectedType === id
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              } flex flex-col items-center`}
            >
              <Icon
                className={`h-6 w-6 ${
                  selectedType === id
                    ? 'text-emerald-500'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              />
              <span
                className={`mt-2 text-sm ${
                  selectedType === id
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Address Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <Input
          label="Street Address"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
          placeholder="Enter street address"
          icon={<MapPin className="h-5 w-5 text-gray-400" />}
        />

        <Input
          label="Apartment/Suite (Optional)"
          value={address.apartment}
          onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
          placeholder="Apt, Suite, Floor"
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            placeholder="City"
          />
          <Input
            label="State"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            placeholder="State"
          />
        </div>

        <Input
          label="ZIP Code"
          value={address.zipCode}
          onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
          placeholder="ZIP Code"
        />

        <Button className="w-full">Save Address</Button>
      </motion.div>
    </div>
  );
}