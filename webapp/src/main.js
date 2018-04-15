import App from './App.vue';
import Toasted from 'vue-toasted';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import i18n from './lang';
import router from './router';
import store from './store';

Vue.use(Toasted, {
  position: 'bottom-left',
  duration: 5000,
});

Vue.toasted.register(
'error',
  ({ message }) => `<svg version="1.1" role="presentation" width="30" height="30" viewBox="0 0 1792 1792" class="fa-icon"><path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path></svg>${message}`,
  { type: 'error' }
);

Vue.toasted.register(
'success',
  ({ message }) => `<svg version="1.1" role="presentation" width="27.5" height="32" viewBox="0 0 1536 1792" class="fa-icon"><path d="M1171 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>${message}`,
  { type: 'success' }
);

Vue.toasted.register(
'info',
  ({ message }) => `<svg version="1.1" role="presentation" width="27.5" height="32" viewBox="0 0 1536 1792" class="fa-icon"><path d="M1024 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zM896 480v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>${message}`,
  { type: 'info' }
);

Vue.use(VeeValidate);
Vue.use(Toasted);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  components: { App },
  el: '#app',
  template: '<App/>',
  store,
});
