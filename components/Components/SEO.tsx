import React from 'react';
import Head from 'next/head';

const DOMAIN = 'https://www.stellr.social/';

export default function Seo({
  title = 'Stellr',
  description = 'Stellr is a Web3.0 base social networking platform built on Polygon with Lens Protocol',
  siteName = 'Stellr',
  canonical = DOMAIN,
}:{ title?:string,
  description?:string,
  siteName?:string,
  canonical?:string,
}) {
  return (
    <Head>
      <title key="title">{`${title} | ${siteName}`}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />

      <meta name="robots" content="index,follow" />

      <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#FFF" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#B7B0FF" />
      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
  );
}
