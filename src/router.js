import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import Team from './views/Team.vue';
import SignUp from './views/SignUp.vue';
import Admin from './views/Admin.vue';
import DesignSys from './views/DesignSys.vue';
import Starwars from './views/Starwars.vue';

import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.getters.activeuser !== null) {
          next();
        } else {
          next({ name: 'home' });
        }
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      beforeEnter(to, from, next) {
        if (store.getters.activeuser !== null) {
          next();
        } else {
          next({ name: 'home' });
        }
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter(to, from, next) {
        if (store.getters.activeuser !== null) {
          if (store.getters.isadmin) {
            next();
          } else {
            next({ name: 'dashboard ' });
          }
        } else {
          next({ name: 'home' });
        }
      },
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      beforeEnter(to, from, next) {
        if (store.getters.activeuser !== null) {
          next();
        } else {
          next({ name: 'home' });
        }
      },
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/designsys',
      name: 'designsys',
      component: DesignSys,
    },
    {
      path: '/starwars',
      name: 'starwars',
      component: Starwars,
    },
  ],
});
