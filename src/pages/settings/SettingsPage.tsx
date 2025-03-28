import React, { useState } from 'react';
import { Moon, Sun, Globe, Bell, Shield, CreditCard, LogOut } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useThemeStore } from '../../store/useThemeStore';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

export default function SettingsPage() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState({
    orders: true,
    promotions: true,
    updates: false,
  });
  const { isDarkMode, toggleTheme } = useThemeStore();


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Settings</h1>

      <div className="space-y-6">
        {/* Appearance */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Appearance</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isDarkMode ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
              <div>
                <p className="font-medium dark:text-white">Dark Mode</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {isDarkMode ? 'Dark theme enabled' : 'Light theme enabled'}
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isDarkMode ? 'bg-emerald-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-emerald-900/50 transition-transform ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Language</h2>
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-900 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium capitalize dark:text-white">{key}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Receive notifications about your {key}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({ ...notifications, [key]: !value })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-emerald-900/50 transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
            <Shield className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
            <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
          <Button variant="outline" className="w-full justify-start">
            Manage Payment Methods
          </Button>
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full text-red-600 hover:bg-red-50 hover:border-red-600"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}