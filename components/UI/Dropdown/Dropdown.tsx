/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, ReactNode } from 'react';
import { Button, Icon } from 'components/UI';
import { ButtonProps } from '../Button/ButtonProps';
import { IconProps } from '../Icon/IconProps';
import { DropdownProps } from './DropdownProps';

type TriggerType = {
  button:ButtonProps;
  icon:IconProps;
  trigger:ReactNode;
  text?:string;
  openDropDown: boolean;
  setDropDown: (dropDownState:boolean) => void;
};
const Trigger = ({
  button, icon, trigger, text, openDropDown, setDropDown,
}: TriggerType) => {
  if (icon) {
    // eslint-disable-next-line no-param-reassign
    icon.className = `transition duration-200 transform ${openDropDown && icon.rotate ? 'rotate-180' : ''}`;
  }
  if (button) {
    return (
      <Button
        type={button.type}
        ariaLabel={button.ariaLabel}
        text={button.text}
        color={button.color}
        icon={icon}
        className={button.className}
        loading={button.loading}
        onClick={() => setDropDown(!openDropDown)}
      >
        {button.children}
      </Button>
    );
  }
  if (trigger) {
    return (
      <div onClick={() => setDropDown(!openDropDown)} className="flex items-center cursor-pointer">
        {trigger}
        <Icon name={icon.name} color={icon.color} solid={icon.solid} size="small" className={`${icon.className || ''} ml-2`} />
      </div>
    );
  }
  return (
    <p onClick={() => setDropDown(!openDropDown)} className="cursor-pointer">
      {text}
    </p>
  );
};

export const Dropdown = ({
  className,
  dropClassName = '',
  dropBackgroundColor,
  children,
  button,
  icon,
  text,
  trigger,
  id,
  ariaLabel,
}: DropdownProps) => {
  const [openDropDown, setDropDown] = useState(false);
  useEffect(() => {
    function clickHandler() {
      setDropDown(false);
    }
    // initiate the event handler
    window.addEventListener('click', clickHandler, true);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('click', clickHandler);
    };
  });
  if (!id) {
    return null;
  }
  const display = openDropDown ? 'block' : 'hidden';
  const visibility = openDropDown ? 'visible' : 'invisible';
  const opacity = openDropDown ? 'opacity-100' : 'opacity-0';
  const height = openDropDown ? 'h-auto' : '0';
  return (
    <div
      id={id}
      className={`relative inline-block top-0 ${dropBackgroundColor || 'bg-transparent'} border-none ${className || ''}`}
      aria-label={ariaLabel}
    >
      <Trigger
        button={button}
        icon={icon}
        trigger={trigger}
        text={text}
        openDropDown={openDropDown}
        setDropDown={setDropDown}
      />
      <div //  this line break shouldn't cause issues but if it does look here first
        className={`z-30 transition duration-200 overflow-hidden absolute
         right-0 shadow-xs ${visibility} ${opacity} ${height} ${display} ${dropClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
export default Dropdown;
