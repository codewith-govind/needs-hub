import React from "react";
import { User, Mail, Phone, MapPin, Edit2, Camera } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function ProfilePage() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-emerald-500 to-emerald-600 relative">
          <button className="absolute bottom-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:bg-gray-50">
            <Camera className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-8">
          <div className="flex items-start">
            {/* Avatar */}
            <div className="relative -mt-20">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-sm"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50">
                <Camera className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Name and Edit Button */}
            <div className="ml-6 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-200">Member since March 2024</p>
                </div>

                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400 dark:text-gray-200" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-200">Full Name</p>
                  <p className="font-medium dark:text-white">John Doe</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 dark:text-gray-200" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-200">Email</p>
                  <p className="font-medium dark:text-white">john.doe@example.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 dark:text-gray-200" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-200">Phone</p>
                  <p className="font-medium dark:text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-200" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-200">Default Address</p>
                  <p className="font-medium dark:text-white">123 Main St, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Orders</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">24</p>
          <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">Last order 2 days ago</p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Spent</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">$1,248</p>
          <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">Lifetime purchases</p>
        </div>
        <Link to={"/address"}>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delivery Addresses</h3>
            <p className="text-3xl font-bold text-emerald-600 mt-2">3</p>
            <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">Saved locations</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
