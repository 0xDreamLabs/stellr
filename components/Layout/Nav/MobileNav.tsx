import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StellrLink from '../../Components/StellrLink';
import { useScrollDirection } from '../../../hooks';
import { Button, Overlay, Icon } from '../../UI';
// import Logo from '../../UI/icons/logo';

import nav from './nav.enum';
import AddressInformationButton from '../../Components/AddressInformationButton';

const MobileHeaderNav = ({ setIsOverlayOpen }: { setIsOverlayOpen: (isOpen: boolean) => void }) => {
  const scrollDir = useScrollDirection({ initialDirection: '' });
  // controls the animations if the mobile sub bar should display based on scroll direction
  const mobileSubBarDisplay = scrollDir === 'down' ? 'translate-y-[-100%] hidden' : 'translate-y-0';
  return (
    <div id="mobile-nav-header" className={`transition-all ${mobileSubBarDisplay} flex justify-between px-8 py-2 h-16 md:hidden`}>
      <Button
        type="button"
        ariaLabel="Open Mobile Side Menu"
        onClick={() => setIsOverlayOpen(true)}
        color="none"
      >
        <div id="profile-img-placeholder" className="bg-blue-500 rounded-full w-12 h-12" />
      </Button>
      <StellrLink href="/">
        {/* <Logo formattedClassName='w-12 h-12' gradient gradientId='mobile-logo' /> */}
        <h2>Logo was here</h2>
      </StellrLink>
      <Button
        type="button"
        ariaLabel="Log in / Log out"
        color="none"
        icon={
       {
         name: 'logout',
         position: 'none',
         color: 'black',
         size: 'large',
         solid: true,
       }
      }
      />
    </div>
  );
};

const MobileMenuOptions = ({
  isOverlayOpen,
  setIsOverlayOpen,
  menuOptions,
}:{
  isOverlayOpen: boolean,
  setIsOverlayOpen: (state: boolean) => void,
  menuOptions: any
}) => (
  <Overlay
    open={!!isOverlayOpen}
    dismiss={() => setIsOverlayOpen(false)}
    ariaLabel="Mobile Navigation Options"
    widthClasses="min-w-[80vw]"
    openFromDirection="left"
  >
    <ul className="mb-10">
      <li id="display-name" className="font-bold text-lg">Display Name</li>
      <li id="lens-handle" className="text-sm pb-4">@0xD4V1NC1</li>

      <li className="flex pb-8">
        <p className="mr-2">
          <span className="font-bold">1000</span>
          {' '}
          Following
        </p>
        <p>
          <span className="font-bold">1000</span>
          {' '}
          Followers
        </p>
      </li>
      {menuOptions.menuOptions.items.map((menuOption: any) => (
        <li key={menuOption.label} className="pr-6 hover:bg-gray-200 dark:hover:bg-primary-dark-400 rounded">
          <Button
            type="button"
            color="none"
            ariaLabel={`${menuOption.ariaLabel}`}
            href={menuOption.href || ''}
            className="flex w-9/10 mx-4 my-2 items-center cursor-pointer py-1 shadow-none rounded"
          >
            <Icon name={menuOption.icon} size="large" color="primary" className="mr-3" />
            <p className="text-lg text-primary-500 dark:text-white">{menuOption.label}</p>
          </Button>
        </li>
      ))}
    </ul>
    <div className="mx-4 my-2 flex items-center">
      <AddressInformationButton address="fake address" connector={null} />
    </div>
  </Overlay>
);

const NavItem = ({ navItem }: { navItem: any }) => {
  const router = useRouter();
  const isActivePage = navItem.href === router.pathname;
  return (
    <StellrLink href={`${navItem.href}`} ariaLabel={navItem.ariaLabel || ''}>
      <Icon name={navItem.icon} color="black" size="large" solid={isActivePage} />
    </StellrLink>
  );
};

// @TODO update the props... remove ALL ANY
const MobileBottomNav = ({ mobileNavConfig }: { mobileNavConfig: any }) => {
  if (!mobileNavConfig) return null;

  return (
    <div
      id="mobile-nav-bottom"
      className="flex justify-between px-4 py-4 md:hidden bg-white dark:bg-black bottom-0 fixed w-full rounded-t-2xl border-t"
    >
      {mobileNavConfig.items.map((navItem: any) => (
        <NavItem key={navItem.id} navItem={navItem} />
      ))}
    </div>
  );
};

const MobileNav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { mobile } = nav;

  return (
    <>
      <MobileHeaderNav setIsOverlayOpen={setIsOverlayOpen} />
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex...
      it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} menuOptions={mobile} />
      <MobileBottomNav mobileNavConfig={mobile.bottomNav} />
    </>
  );
};
export default MobileNav;
