import React from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '../components/HomepageHero';
import HomepageOrgs from '../components/HomepageOrgs';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Aloong Planet Documentation">
      <HomepageHero />
      <main>
        <HomepageOrgs />
      </main>
    </Layout>
  );
}
