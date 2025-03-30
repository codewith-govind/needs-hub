import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import { useSidebar } from '../../context/SidebarContext';
// import { useClickOutside } from '../hooks/useClickOutside'

export default function ShopLayout() {
  const {isOpen } = useSidebar();
  const asideRef = useRef(null);
  // useClickOutside(asideRef, ()=>{
  //   // console.log("toggle")
  //   if(isOpen){
  //     toggle();
  //   }
  // })

  return (
    <div className="min-h-screen  dark:bg-gray-800">
      {/* bg-gray-50 */}
      <Header />
      <Sidebar/>
      <main className={"pb-20 lg:pl-64"}>
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}