import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopLayout from './components/layout/ShopLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/orders/OrderHistoryPage';
import ProfilePage from './pages/profile/ProfilePage';
import { CartProvider } from './context/CartContext';
import { SidebarProvider } from './context/SidebarContext';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AuthLayout from './components/layout/AuthLayout';
import SettingsPage from './pages/settings/SettingsPage';
import { useThemeStore } from './store/useThemeStore';
import SelectAddressPage from './pages/address/SelectAddressPage';
import AddAddressPage from './pages/address/AddAddressPage';
import Onboarding from './components/Onboarding';

function App() {
  const { isDarkMode } = useThemeStore();
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const completed = localStorage.getItem('onboardingComplete');
    setIsOnboardingComplete(Boolean(completed));
  }, []);

  if (!isOnboardingComplete) {
    return <Onboarding onComplete={() => setIsOnboardingComplete(true)} />;
  }
  
  return (
    <BrowserRouter>
      <SidebarProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<ShopLayout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="product/:id" element={<ProductDetailsPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="orders" element={<OrderHistoryPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="order/:id" element={<OrderDetailsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="address" element={<SelectAddressPage />} />
              <Route path="address/new" element={<AddAddressPage />} />
            </Route>
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;