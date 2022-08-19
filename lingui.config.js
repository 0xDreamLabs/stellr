
module.exports = {
    locales: ['en', 'es', 'pseudo'],
    pseudoLocale: 'pseudo',
    sourceLocale: 'en',
    fallbackLocales: {
      default: 'en'
    },
    catalogs: [
      {
        path: 'src/translations/locales/{locale}/messages',
        include: ['pages/', 'components/']
      }
    ],
    format: 'po'
  }