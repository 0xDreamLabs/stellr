import React from 'react';
import Link from 'next/link';

// import Logo from '../../UI/icons/logo';
import DarkModeToggle from '../../Components/DarkModeToggle';
// import AccountButton from '../../Components/AccountButton';

const DesktopNav = () => (
  <div className="hidden md:flex md:justify-between md:items-center h-full">
    <Link href="/">
      <div className="flex items-center hover:bg-purple-100 dark:hover:bg-purple-300 md:py-2 md:px-4 justify-center hover:cursor-pointer text-center h-full">
        {/* <Logo formattedClassName='w-12 h-12' gradient gradientId='desktop-logo'/> */}
        <h2 className="ml-4 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"> Stellr </h2>
      </div>
    </Link>
    <div className="mx-4 my-2 flex items-center">
      <div className="mr-4">
        <DarkModeToggle />
      </div>
      {/* <AccountButton /> */}
    </div>
  </div>
);
export default DesktopNav;
