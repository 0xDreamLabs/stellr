import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => (
  <Layout>
    <div className="min-h-screen bg-white dark:bg-primary-dark-500">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </div>
  </Layout>
);

export default Home;
