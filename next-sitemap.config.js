/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://stellr.social';

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    /*
    
    // how to exclude pages from robotsTxt
    robotsTxtOption:{
        policies: [
            { userAgent: '*', disallow: '/some-page'},
            { userAgent: '*', allow: '/'}
        ],
        additionalSitemaps:[`${siteUrl}/sitemap.xml`, `${siteUrl}/other-sitemap.xml`] // for dynamically rendered pages that aren't available on build
    },
    
    */
    /* exclude: ['/'],*/ // <-- use to exclude pages from sitemap
  }