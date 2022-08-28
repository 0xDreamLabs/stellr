import React, { useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import { loadTranslations } from 'ni18n';

import { ni18nConfig } from '../ni18n.config';
import Layout from '../components/Layout/Layout';
import { useGlobalContext } from '../providers/GlobalProvider';
import ToggleLanguage from '../components/Components/toggleLanguage';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  const { setPageTitle, setMetaDescription } = useGlobalContext();

  useEffect(() => {
    setPageTitle('Home | Stellr');
    setMetaDescription('Home page of Stellr');
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-primary-dark-500 mx-8">
        <h1 className="text-3xl font-bold underline text-red-700 dark:text-red-500">
          {t('hello')}
        </h1>
        <ToggleLanguage toggleText={t('Toggle Language')} />
        <div>
          <p>{t('Some Text')}</p>
        </div>
      </div>
    </Layout>
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
export default Home;
