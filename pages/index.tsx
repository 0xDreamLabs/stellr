import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import { loadTranslations } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-primary-dark-500">
        <h1 className="text-3xl font-bold underline text-red-500">
          {t('hello')}
        </h1>
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
