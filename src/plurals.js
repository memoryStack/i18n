const i18next = require('i18next')

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "anuj_one": "item",
        "anuj_other": "other items",
        "anujWithCount_one": "{{count}} item",
        "anujWithCount_other": "{{count}} items",
      }
    }
  }
});

console.log(i18next.t('anuj', { count: 1 }))
console.log(i18next.t('anuj', { count: 2 }))
console.log(i18next.t('anuj', { count: 3 }))

/*
  the suffixes like _one, _other are language dependent
    for english 
      1. _one
      2. _other
    for arabic gets used
      _zero
      _one
      _two
      _few
      _many
      _other
}
*/