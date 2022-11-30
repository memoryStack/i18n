const i18next = require('i18next')

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    en: {
      // note: translation is the default namespace for any language
      translation: {
        "key": "hello world",
      }
    },
    hindi: {
      translation: {
        "manish": "मनीष"
      }
    }
  }
});

console.log(i18next.t('key'))

i18next.changeLanguage('hindi')

console.log(i18next.t('manish'))
