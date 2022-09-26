import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import { Layout } from 'components/Layout';
import { SEO } from 'components/Components';

const NotificationsPage: NextPage = () => {
  const { t } = useTranslation('notifications');

  return (
    <>
      <SEO title="Notifications" description="Stellr Notifications Page" canonical="https://www.stellr.social/notifications" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('notifications_title')}
          </h1>
          <div>
            <p>{t('notifications_subtext1')}</p>
          </div>
        </div>
      </Layout>
    </>

  );
};

export default NotificationsPage;
