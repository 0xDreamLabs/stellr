import React, {ReactNode} from 'react';
export type LayoutProps {
    noNav?: boolean;
    noFooter?: boolean;
    children: ReactNode;
};