import Vue from 'vue';
import VueI18n from 'vue-i18n';
import de from './de';
import en from './en';
import moment from 'moment';

Vue.use(VueI18n);

const messages = {
  en,
  de,
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
export default i18n;

export const changeLocale = (locale) => {
  moment.locale(locale);
  i18n.locale = locale;
};
