import React from 'react';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
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
import { useLanguageSettings } from '../hooks';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function Stellr({ Component, pageProps }: AppProps) {
  const { langSetting } = useLanguageSettings();
  // this controls what language is displayed based on what is fetched from the hook (local storage)
  useSyncLanguage(langSetting);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default appWithI18Next(Stellr, ni18nConfig);
