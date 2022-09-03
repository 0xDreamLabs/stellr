import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StellrLink from '../../Components/StellrLink';

import { Button, Overlay, Icon } from '../../UI';
// import Logo from '../../UI/icons/logo';

import nav from './nav.enum';
import AddressInformationButton from '../../Components/AddressInformationButton';

const MobileMenuOptions = ({
  isOverlayOpen,
  setIsOverlayOpen,
  menuOptions,
}:{
  isOverlayOpen: boolean,
  setIsOverlayOpen: (state: boolean) => void,
  menuOptions: any
}) => (
  <Overlay open={!!isOverlayOpen} dismiss={() => setIsOverlayOpen(false)} ariaLabel="Mobile Navigation Options" maxWidth="max-w-[50%]">
    <ul className="mb-10">
      <li>
        <p className="text-xs uppercase pb-2 font-bold pl-6">Navigation</p>
      </li>
      {menuOptions.bottomNav.items.map((menuOption: any) => (
        <li key={menuOption.label} className="px-6 hover:bg-gray-200 dark:hover:bg-primary-dark-400 rounded">
          <Button
            type="button"
            color="none"
            ariaLabel={`${menuOption.ariaLabel}`}
            href={menuOption.href || ''}
            className="flex w-9/10 mx-4 my-2 items-center cursor-pointer py-1 shadow-none rounded"
          >
            <Icon name={menuOption.icon} size="xlarge" color="primary" className="mr-3" />
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
      <Icon name={navItem.icon} color="black" size="xlarge" solid={isActivePage} />
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
      <div id="mobile-nav-header" className="flex justify-between px-8 py-2 md:hidden">
        <StellrLink href="/profile">
          <div id="profile-img-placeholder" className="bg-blue-500 rounded-full w-12 h-12" />
        </StellrLink>
        <StellrLink href="/">
          {/* <Logo formattedClassName='w-12 h-12' gradient gradientId='mobile-logo' /> */}
          <h2>Logo was here</h2>
        </StellrLink>
        <Button
          type="button"
          ariaLabel="Open Mobile Side Menu"
          onClick={() => setIsOverlayOpen(true)}
          color="none"
          icon={{
            name: 'menu-3', size: '2xlarge', color: 'black', position: 'none',
          }}
        />
      </div>
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex...
      it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} menuOptions={mobile} />
      <MobileBottomNav mobileNavConfig={mobile.bottomNav} />
    </>
  );
};
export default MobileNav;
