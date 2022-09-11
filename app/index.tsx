import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import type { NextPage, GetStaticProps } from 'next';
import { loadTranslations } from 'ni18n';

import { useTranslation } from 'react-i18next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ni18nConfig } from '../ni18n.config';

import Layout from '../components/Layout/Layout';
import { Error, Loading } from '../components/UI';
import SEO from '../components/Components/SEO';
import DarkModeToggle from '../components/Components/DarkModeToggle';
import ToggleLanguage from '../components/Components/ToggleLanguage';
import ConnectWalletButton from '../components/Components/ConnectWalletButton/ConnectWalletButton';

// const TestSuspense = React.lazy(() => import('../components/Components/TestSuspense.client'));
// const TestSuspense = dynamic(() => import('../components/Components/TestSuspense.client'), { suspense: true, ssr: false });

import TestSuspense from '../components/Components/TestSuspense';

const HomePage: NextPage = (props: any) => {
  const { t } = useTranslation('home');
  const isServer = typeof window === 'undefined';
  console.log('PROPS:', props);
  return (
    <>
      <SEO title="Home" description="Stellr Home Page" canonical="https://www.stellr.social/" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('hello')}
            HOMEMEMMEMEMEM
          </h1>
          <ErrorBoundary fallback={<Error errorMsg="Error Fetching Data" />}>
            <Suspense fallback={<Loading className="w-6 h-6" message="Loading..." />}>
              <TestSuspense />
              <TestSuspense />

              <TestSuspense />

              <div>
                {' '}
                <p> SOME OTHER COMPONENTE </p>
              </div>
            </Suspense>
          </ErrorBoundary>

          <ConnectButton showBalance={false} label={t('hello')} />
          <div className="py-4">
            <ConnectWalletButton />
          </div>
          <ToggleLanguage toggleText={t('Toggle Language')} />
          <div>
            <p>{t('Some Text')}</p>
          </div>
          <DarkModeToggle />
        </div>
      </Layout>
    </>

  );
};
export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await loadTranslations(ni18nConfig, props.locale, [
      'home',
      'translation',
    ])),
  },
});
export default HomePage;
