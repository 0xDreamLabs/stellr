import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Components/SEO';
import DarkModeToggle from '../components/Components/DarkModeToggle';

import ToggleLanguage from '../components/Components/ToggleLanguage';

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
          <ToggleLanguage toggleText={t('language_button')} />
          <div>
            <p>{t('settings_subtext1')}</p>
          </div>
          <DarkModeToggle />
        </div>
      </Layout>
    </>

  );
};

export default SettingsPage;
