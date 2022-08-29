import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import { loadTranslations } from 'ni18n';

import { ni18nConfig } from '../ni18n.config';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Components/SEO';

import ToggleLanguage from '../components/Components/toggleLanguage';

const Home: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <SEO title="Home" description="Stellr Home Page" canonical="https://www.stellr.social/" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className='text-3xl font-bold underlin'>
            {t('hello')}
          </h1>
          <ToggleLanguage toggleText={t('Toggle Language')} />
          <div>
            <p>{t('Some Text')}</p>
          </div>
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
export default Home;
