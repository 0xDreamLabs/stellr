import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

import Button from '../UI/Button';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();
  const iconName = `${isDark ? 'sun': 'moon'}`;
  return (
    <Button type='button' ariaLabel={`Click to toggle theme to ${isDark ? 'light' : 'dark'} mode`} color='none' icon={{name: iconName, size: 'large', position: 'none',
      color: 'black', className: 'hover:text-primary-400 dark:hover:text-primary-400', solid: true}} onClick={()=> setIsDark(!isDark)} />
  );
};
export default DarkModeToggle;
