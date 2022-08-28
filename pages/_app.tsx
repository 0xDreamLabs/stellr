import React from 'react';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ni18nConfig } from '../ni18n.config';
import GlobalProvider from '../providers/GlobalProvider';
import { useLanguageSettings } from '../hooks';

function Stellr({ Component, pageProps }: AppProps) {
  const { langSetting } = useLanguageSettings();
  // this controls what language is displayed based on what is fetched from the hook (local storage)
  useSyncLanguage(langSetting);
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default appWithI18Next(Stellr, ni18nConfig);
