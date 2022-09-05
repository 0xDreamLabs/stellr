import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StellrLink from '../../Components/StellrLink';
import { useScrollDirection } from '../../../hooks';
import { Button, Overlay, Icon } from '../../UI';
// import Logo from '../../UI/icons/logo';

import nav from './nav.enum';

const MobileHeaderNav = ({ setIsOverlayOpen }: { setIsOverlayOpen: (isOpen: boolean) => void }) => {
  const scrollDir = useScrollDirection({ initialDirection: '' });

  // controls the animations if the mobile header should display based on scroll direction
  const scrollDirectionAnimations = scrollDir === 'down' ? 'translate-y-[-100%] hidden' : 'translate-y-0';
  return (
    <div id="mobile-nav-header" className={`transition-all ${scrollDirectionAnimations} flex justify-between px-8 py-2 h-16 md:hidden`}>
      <Button
        type="button"
        ariaLabel="Open Mobile Side Menu"
        onClick={() => setIsOverlayOpen(true)}
        color="none"
      >
        <div id="profile-img-placeholder" className="bg-primary-500 rounded-full w-12 h-12" />
      </Button>
      <StellrLink href="/" ariaLabel="Link to homepage">
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
}:{
  isOverlayOpen: boolean,
  setIsOverlayOpen: (state: boolean) => void,
}) => {
  const { mobile } = nav;
  return (
    <Overlay
      open={!!isOverlayOpen}
      dismiss={() => setIsOverlayOpen(false)}
      ariaLabel="Mobile Navigation Options"
      widthClasses="min-w-[80vw]"
      openFromDirection="left"
    >
      <ul className="mb-10">
        <li className="pb-4">
          <StellrLink href="/profile" ariaLabel="Link to your Profile">
            <div id="profile-img-placeholder-menu-options" className="bg-primary-500 rounded-full w-16 h-16" />
          </StellrLink>
        </li>
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
        {mobile.menuOptions.items.map((menuOption: any) => (
          <li key={menuOption.label} className="pr-6 hover:bg-gray-200 dark:hover:bg-primary-700 rounded">
            <Button
              type="button"
              color="none"
              ariaLabel={`${menuOption.ariaLabel}`}
              href={menuOption.href || ''}
              className="flex w-9/10 mx-4 my-2 items-center cursor-pointer py-1 shadow-none rounded"
            >
              <Icon name={menuOption.icon} size="large" color="black" className="mr-3" />
              <p className="text-lg text-black dark:text-white">{menuOption.label}</p>
            </Button>
          </li>
        ))}
      </ul>
    </Overlay>
  );
};

const NavItem = ({ navItem }: { navItem: any }) => {
  const router = useRouter();
  const isActivePage = navItem.href === router.pathname;
  return (
    <StellrLink href={`${navItem.href}`} ariaLabel={navItem.ariaLabel || ''}>
      <Icon name={navItem.icon} color="black" size="large" solid={isActivePage} />
    </StellrLink>
  );
};

const MobileBottomNav = () => {
  const { mobile } = nav;

  return (
    <div id="bottom-nav-wrapper" className="w-full">
      <div
        id="mobile-nav-bottom"
        className="flex justify-between p-6 md:hidden bg-primary-100 dark:bg-primary-800 bottom-0 fixed w-[90%] rounded-full mb-4 mx-4 shadow-lg shadow-primary-400/50 dark:shadow-primary-700/50"
      >
        {mobile.bottomNav.items.map((navItem: any) => (
          <NavItem key={navItem.id} navItem={navItem} />
        ))}
      </div>
    </div>

  );
};

const MobileNav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <MobileHeaderNav setIsOverlayOpen={setIsOverlayOpen} />
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex...
      it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
      <MobileBottomNav />
    </>
  );
};
export default MobileNav;
