/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '@assets/locales/en/common.json';
import commonMy from '@assets/locales/my/common.json';

const resources = {
  en: {
    common: commonEn,
    // add other en ns here
  },
  my: {
    common: commonMy,
    // add other my ns here
  },
};

i18n.use(initReactI18next).init({
  // debug: process.env.NODE_ENV === 'development',
  initImmediate: false,
  preload: ['en', 'my'],
  resources,
  defaultNS: 'common',
  lng: 'en',
  fallbackLng: 'en',

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ',',
  },

  // react: {
  //   wait: true,
  // },
});

export default i18n;
