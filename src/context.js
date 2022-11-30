const i18next = require('i18next')

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "person": "a normal person",
        "person_sister": "a sister like person",
        "person_mother": "a mother like lady",
        "person_father": "a father like gentleman",
        "person_sister_other": "few sister like girls",
      }
    }
  }
});

console.log(i18next.t('person'))
console.log(i18next.t('person', { context: 'sister' }))
console.log(i18next.t('person', { context: 'mother' }))
console.log(i18next.t('person', { context: 'father' }))

// combining context and plurals
console.log(i18next.t('person', { context: 'sister', count: 3 }))

// fallbacks to the key which have context only 
// as singular form doesn't exist
console.log(i18next.t('person', { context: 'sister', count: 1 }))