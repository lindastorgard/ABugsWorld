import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Critters from '../views/Critters.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/critters',
      name: 'Critters',
      component: Critters,
    },
  ],
});
