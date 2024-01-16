import 'react-i18next';
import en from '@assets/locales/en/common.json';
import my from '@assets/locales/my/common.json';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      en: typeof en;
      my: typeof my;
    };
  }
}
