import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Components/SEO';
import DarkModeToggle from '../components/Components/DarkModeToggle';

import ToggleLanguage from '../components/Components/ToggleLanguage';

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
          <ToggleLanguage toggleText={t('language_button')} />
          <div>
            <p>{t('messages_subtext1')}</p>
          </div>
          <DarkModeToggle />
        </div>
      </Layout>
    </>

  );
};

// export const getStaticProps: GetStaticProps = async (props) => ({
//   props: {
//     ...(await loadTranslations(ni18nConfig, props.locale, [
//       'messages',
//       'translation',
//     ])),
//   },
// });
export default MessagesPage;
