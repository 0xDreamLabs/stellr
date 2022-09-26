import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import { Layout } from 'components/Layout';
import { SEO } from 'components/Components';

const SettingsPage: NextPage = () => {
  const { t } = useTranslation('notifications');

  return (
    <>
      <SEO title="Settings" description="Stellr Settings Page" canonical="https://www.stellr.social/settings" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('settings_title')}
          </h1>
          <div>
            <p>{t('settings_subtext1')}</p>
          </div>
        </div>
      </Layout>
    </>

  );
};

export default SettingsPage;
