const i18next = require('i18next')

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key_one": "{{count}}st place", // 1st, 21st, 31st
        "key_two": "{{count}}nd place", // 2nd, 22nd, 32nd
        "key_few": "{{count}}rd place", // 3rd, 23rd, 33rd
        "key_other": "{{count}}th place" // 4th, 5th, 24th, 11th
      }
    }
  }
});

console.log(i18next.t('key', { count: 1, ordinal: true }))
console.log(i18next.t('key', { count: 2, ordinal: true }))
console.log(i18next.t('key', { count: 3, ordinal: true }))
console.log(i18next.t('key', { count: 44, ordinal: true }))

/*
  ques -> like normal plurals, are suffixes in this ordinal plural is also 
          dependent on language ??
*/