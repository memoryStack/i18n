const i18next = require('i18next')

i18next.init({
  lng: 'hindi',
  debug: true,
  resources: {
    hindi: {
      translation: {
        "save": "सेव {{typeOfDetails}}",
        "manish": "मनीष {{adjective}} बच्चा हैं",
      }
    }
  }
});

// we can use flower brackets to inject dynamic values 
// in the values like this
console.log(i18next.t('manish', { adjective: "अच्छा" }))

console.log(i18next.t('save', { typeOfDetails: "व्यक्तिगत जानकारी" }))
