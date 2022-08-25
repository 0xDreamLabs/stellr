import { ReactNode } from 'react';
import { ButtonProps } from '../Button/ButtonProps';
import { IconProps } from '../Icon/IconProps';

export type DropdownProps = {
  // will return null without id
  id: string;

  children: ReactNode;
  dropBackgroundColor?: string;
  className?:string;
  dropClassName?: string;
  button: ButtonProps;
  icon: IconProps;
  text?: string;
  trigger: ReactNode;
  ariaLabel: string;
};
