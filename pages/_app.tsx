import React, { useEffect, useState } from 'react';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';

import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
  // DisclaimerComponent,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { useLanguageSettings, useHasMounted } from 'hooks';
import { Loading } from 'components/UI';
import GlobalProvider from 'providers/GlobalProvider';
import { ni18nConfig } from '../ni18n.config';

const { chains, provider } = configureChains(
  [chain.polygon],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'Stellr.Social',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// const Disclaimer: DisclaimerComponent = ({ Text, Link }: { Text: any, Link: any }) => (
//   <Text>
//     By connecting your wallet, you agree to the
//     <Link href="https://termsofservice.xyz"> Terms of Service </Link>
//     and acknowledge you have read and understand the protocol
//     <Link href="https://disclaimer.xyz"> Disclaimer</Link>
//   </Text>
// );

function Stellr({ Component, pageProps }: AppProps) {
  const [isChangingRoute, setIsChangingRoute] = useState(false);
  const hasMounted = useHasMounted();
  const { langSetting } = useLanguageSettings();

  // this controls what language is displayed based on what is fetched from the hook (local storage)
  useSyncLanguage(langSetting);

  useEffect(() => {
    const start = () => {
      setIsChangingRoute(true);
    };
    const end = () => {
      setIsChangingRoute(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  // @TODO update wallet themes
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={{
          lightMode: lightTheme({
            accentColor: '#5733a6',
            accentColorForeground: 'white',
            borderRadius: 'large',
          }),
          darkMode: darkTheme({
            accentColor: '#8c60da',
            accentColorForeground: 'white',
            borderRadius: 'large',
          }),
        }}
        appInfo={{
          appName: 'Stellr',
          // disclaimer: Disclaimer,
        }}
        showRecentTransactions
        chains={chains}
        coolMode
      >
        <GlobalProvider>
          {/* If we are changing navigation route or app is initially loading... show loader, otherwise we show app */}
          {isChangingRoute || !hasMounted
            ? <div className="flex justify-center items-center h-screen"><Loading message="Loading..." className="w-12 h-12" /></div>
            : <Component {...pageProps} /> }
        </GlobalProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default appWithI18Next(Stellr, ni18nConfig);
