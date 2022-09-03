import React from 'react';
import { LayoutProps } from './LayoutProps';
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';

const Layout = ({ noNav, noFooter, children }: LayoutProps) => (
  <>
    {noNav ? null : (
      <NavBar />
    )}
    <main className="min-h-screen bg-background dark:bg-background-dark px-8">{children}</main>
    {noFooter ? null : (<Footer />
    )}
  </>
);
export default Layout;
