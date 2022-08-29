import React, {
  createContext, useContext, ReactNode, useState, useMemo,
} from 'react';

export type GlobalState = {
  pageTitle: string;
  setPageTitle: (newTitle: string) => void;
  metaDescription: string;
  setMetaDescription: (newMetaDescription: string) => void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: 'Stellr',
  setPageTitle: () => { /* empty */ },
  metaDescription: '',
  setMetaDescription: () => { /* empty */ },
});

export default function GlobalProvider({ children }:{ children:ReactNode }) {
  // @TODO will leave these for now b/c we will use the global provider for other items in the future,
  // but we use the SEO component for pageTitle and meta description
  const [pageTitle, setPageTitle] = useState<string>('Stellr');
  const [metaDescription, setMetaDescription] = useState<string>('Stellr is a Web3.0 Social Networking Site');
  const globalValues = useMemo(() => ({
    pageTitle, setPageTitle, metaDescription, setMetaDescription,
  }), [pageTitle, metaDescription]);

  return (
    <div className="app">
      <GlobalContext.Provider value={globalValues}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
