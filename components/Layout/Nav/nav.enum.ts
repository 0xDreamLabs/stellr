import { v4 as uuidv4 } from 'uuid';

const nav = {
  mobile: {
    menuOptions: {
      label: 'Menu Options',
      items: [
        {
          label: 'Profile',
          icon: 'user',
          href: '/profile',
          id: uuidv4(),
          ariaLabel: 'Link to Profile Page',
        },
        {
          label: 'Settings',
          icon: 'cog',
          href: '/settings',
          id: uuidv4(),
          ariaLabel: 'Link to Settings Page',
        },
      ],
    },
    bottomNav: {
      label: 'Navigation',
      items: [
        {
          label: 'Home',
          icon: 'home',
          href: '/',
          id: uuidv4(),
          ariaLabel: 'Link to Home Page',
        },
        {
          label: 'Explore',
          icon: 'search',
          href: '/explore',
          id: uuidv4(),
          ariaLabel: 'Link to Explore Page',
        },
        {
          label: 'Notifications',
          icon: 'bell',
          href: '/notifications',
          id: uuidv4(),
          ariaLabel: 'Link to Notifications Page',
        },
        {
          label: 'Messages',
          icon: 'mail',
          href: '/messages',
          id: uuidv4(),
          ariaLabel: 'Link to Messages Page',
        },
      ],
    },
  },
  desktop: {
    primary: {
      label: 'General',
      items: [
        {
          label: 'Mint',
          href: '/#mint-section',
          id: uuidv4(),
          ariaLabel: 'Link to Mint Section',

        },
      ],
    },
  },
};
export default nav;
