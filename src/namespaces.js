const i18next = require('i18next')

i18next.init({
  lng: 'hindi',
  debug: true,
  ns: ['common', 'home'],
  defaultNS: 'home',
  resources: {
    hindi: {
      common: {
        "save": "सेव",
      },
      home: {
        "manish": "मनीष"
      }
    }
  }
});

// will pick key from default "home" namespace
console.log(i18next.t('manish'))

// will pick key from default "home" namespace
console.log(i18next.t('save', { ns: 'common' }))
