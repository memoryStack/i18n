const i18next = require('i18next')

i18next.init({
  lng: 'hindi',
  debug: true,
  ns: ['common', 'home'],
  defaultNS: 'home',
  fallbackNS: 'common',
  resources: {
    hindi: {
      common: {
        "save": "fallbacked सेव",
      },
      home: {
        "manish": "मनीष",
        "सेव": "save",
        // "save": "सेव",
      }
    }
  }
});

// key is found in current namespace
console.log(i18next.t('manish'))

// key is not found in current namespace
// so it will search in namespace specified by "fallbackNS" option above.
// and output will be "fallbacked सेव"
console.log(i18next.t('save'))
