import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, Clock, Settings, LogOut } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

const navigation = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Search', icon: Search, path: '/search' },
  { name: 'Cart', icon: ShoppingBag, path: '/cart' },
  { name: 'Orders', icon: Clock, path: '/orders' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  const { isOpen,toggle } = useSidebar();
  const location = useLocation();

  return (
    <aside className={`lg:visible fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="h-full flex flex-col">
        <div className="flex-1 py-6 overflow-y-auto">
          <div className="px-4 mb-6" onClick={toggle}>
            <h2 className="text-2xl font-bold text-emerald-600">Needs</h2>
          </div>
          
          <nav className="space-y-1 px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:dark:bg-emerald-900/50'
                  }`}
                  onClick={()=>{
                    console.log("innerWidth :",innerWidth)
                    if(innerWidth < 768){
                      toggle();
                    }
                  }}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link to={"/login"}>
            <button className="flex items-center px-3 py-2 w-full rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:dark:bg-emerald-900/50" onClick={toggle}>
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}