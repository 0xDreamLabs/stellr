import React from 'react';
import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import { Layout } from 'components/Layout';
import { SEO } from 'components/Components';

const ProfilePage: NextPage = () => {
  const { t } = useTranslation('profile');

  return (
    <>
      <SEO title="Profile" description="your profile" canonical="https://www.stellr.social/profile" />
      <Layout>
        <div className="text-black dark:text-white">
          <h1 className="text-3xl font-bold underline">
            {t('profile_title')}
          </h1>
          <div>
            <p>{t('profile_subtext1')}</p>
          </div>
        </div>
      </Layout>
    </>

  );
};

export default ProfilePage;
