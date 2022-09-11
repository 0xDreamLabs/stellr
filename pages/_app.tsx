import React, { Suspense } from 'react';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
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

import { ni18nConfig } from '../ni18n.config';
import GlobalProvider from '../providers/GlobalProvider';
import { useLanguageSettings, useHasMounted } from '../hooks';

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
  const { langSetting } = useLanguageSettings();
  // this controls what language is displayed based on what is fetched from the hook (local storage)
  useSyncLanguage(langSetting);
  const hasMounted = useHasMounted();
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
          <Suspense fallback={<p> YOUR APP IS LAODING</p>}>
            {hasMounted ? <Component {...pageProps} /> : null}
          </Suspense>
        </GlobalProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default appWithI18Next(Stellr, ni18nConfig);
