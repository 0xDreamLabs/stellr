import { ReactNode } from 'react';
import { ColorOptions } from '../../../interfaces/types';

export type LoadingProps = {
  color?: ColorOptions;
  message?: string;
  children?: ReactNode;
  isButton?: boolean;
  className?: string;
  messageClassName?: string;
};
