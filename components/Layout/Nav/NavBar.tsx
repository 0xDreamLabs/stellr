import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = () => (
  <header className="md:h-16 w-full opacity-[98%] bg-background dark:bg-background-dark text-black dark:text-white sticky top-0 z-50">
    <nav className="w-full sticky">
      <DesktopNav />
      <MobileNav />
    </nav>
  </header>
);
export default NavBar;
