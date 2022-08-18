import React, { ReactNode } from 'react';
import { ColorOptions } from '../../../interfaces/types';
export default interface LoadingProps {
    color?: ColorOptions;
    message?: string;
    children?: ReactNode;
    isButton?: boolean;
    className?: string;
    messageClassName?: string;
}