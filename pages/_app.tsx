import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <title>Stellr</title>
        <meta name="description" content="Web 3.0 Social Network platform designed for content creators" />
        <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
