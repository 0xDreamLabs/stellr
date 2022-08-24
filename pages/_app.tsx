import React from 'react';
import { appWithI18Next } from 'ni18n';
import '../styles/globals.css';
// import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ni18nConfig } from '../ni18n.config';
import GlobalProvider from '../providers/GlobalProvider';

function Stellr({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default appWithI18Next(Stellr, ni18nConfig);
