import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import { SEO } from 'components/Components';
import { Layout } from 'components/Layout';

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
          <div>
            <p>{t('explore_subtext1')}</p>
          </div>
        </div>
      </Layout>
    </>

  );
};

export default ExplorePage;
