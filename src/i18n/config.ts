import type { InitOptions } from 'i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const options: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'bn'],
  ns: ['home', 'auth', 'course'],
  defaultNS: 'home',
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },

  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
};

i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
