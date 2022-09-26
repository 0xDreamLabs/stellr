import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

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

export default ExplorePage;
