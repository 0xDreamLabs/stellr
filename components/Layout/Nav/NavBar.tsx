import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = () => {
  return (
    <header className='h-16 w-full opacity-[98%] bg-blue-300 dark:bg-pink-400 text-black dark:text-white sticky top-0 z-50'>
      <nav className='w-full sticky'>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};
export default NavBar;
