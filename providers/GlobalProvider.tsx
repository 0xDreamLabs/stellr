import React, {
  createContext, useContext, ReactNode, useState, useMemo,
} from 'react';
import Head from 'next/head';

export type GlobalState = {
  pageTitle: string;
  setPageTitle: (newTitle: string) => void;
  metaDescription: string;
  setMetaDescription: (newMetaDescription: string) => void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: '0xWF',
  setPageTitle: () => { /* empty */ },
  metaDescription: '',
  setMetaDescription: () => { /* empty */ },
});

export default function GlobalProvider({ children }:{ children:ReactNode }) {
  const [pageTitle, setPageTitle] = useState<string>('Stellr');
  const [metaDescription, setMetaDescription] = useState<string>('Stellr is a Web3.0 Social Networking Site');
  const globalValues = useMemo(() => ({
    pageTitle, setPageTitle, metaDescription, setMetaDescription,
  }), [pageTitle, metaDescription]);

  return (
    <div className="app">
      <GlobalContext.Provider value={globalValues}>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={metaDescription} />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        {children}
      </GlobalContext.Provider>
    </div>

  );
}

export const useGlobalContext = () => useContext(GlobalContext);
