const i18next = require('i18next')

i18next.init({
  lng: 'hindi',
  debug: true,
  ns: ['common', 'home'],
  defaultNS: 'home',
  fallbackLng: 'en',
  resources: {
    hindi: {
      common: {
        "save": "सेव",
      },
      home: {
        "manish": "मनीष",
        "सेव": "save",
      }
    },
    en: {
      home: {
        "save": "save fallback"
      }
    }
  }
});

// key is found in current language
console.log(i18next.t('manish'))

// key is not found in current language
// so it will search in language specified by "fallbackLng" option above.
console.log(i18next.t('save'))
