import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Vue from 'vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;
