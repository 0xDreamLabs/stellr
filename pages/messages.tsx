import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';
import { Layout } from 'components/Layout';
import { SEO } from 'components/Components';

const MessagesPage: NextPage = () => {
  const { t } = useTranslation('messages');

  return (
    <>
      <SEO title="Messages" description="Your direct messages are displayed here" canonical="https://www.stellr.social/messages" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('messages_title')}
          </h1>
          <div>
            <p>{t('messages_subtext1')}</p>
          </div>
        </div>
      </Layout>
    </>

  );
};

export default MessagesPage;
