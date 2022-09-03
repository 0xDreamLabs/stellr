import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import { loadTranslations } from 'ni18n';

import { ni18nConfig } from '../ni18n.config';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Components/SEO';
import DarkModeToggle from '../components/Components/DarkModeToggle';

import ToggleLanguage from '../components/Components/ToggleLanguage';

const ExplorePage: NextPage = () => {
  const { t } = useTranslation('explore');

  return (
    <>
      <SEO title="Explore" description="Explore content related to your interests" canonical="https://www.stellr.social/explore" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('explore_title')}
          </h1>
          <ToggleLanguage toggleText={t('language_button')} />
          <div>
            <p>{t('explore_subtext1')}</p>
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
      'explore',
      'translation',
    ])),
  },
});
export default ExplorePage;
