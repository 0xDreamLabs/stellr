import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import type { NextPage, GetServerSideProps } from 'next';
import { loadTranslations } from 'ni18n';

import { useTranslation } from 'react-i18next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Error, Loading } from 'components/UI';
import {
  SEO,
  ToggleLanguage,
  ConnectWalletButton,
  TestSuspense,
} from 'components/Components';
import { Layout } from 'components/Layout';

import { ni18nConfig } from '../ni18n.config';

const HomePage: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <SEO title="Home" description="Stellr Home Page" canonical="https://www.stellr.social/" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('hello')}
          </h1>
          <ErrorBoundary fallback={<Error errorMsg="Error Fetching Data" />}>
            <Suspense fallback={<Loading className="w-6 h-6" message="Loading..." />}>
              <TestSuspense classes="bg-green-300" />
              <TestSuspense classes="bg-teal-400" />

              <TestSuspense classes="bg-pink-500" />
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
        </div>
      </Layout>
    </>

  );
};
export const getServerSideProps: GetServerSideProps = async (props) => ({
  props: {
    ...(await loadTranslations(ni18nConfig, props.locale, [
      'home',
      'translation',
    ])),
  },
});
export default HomePage;
