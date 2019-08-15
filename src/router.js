import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import Team from './views/Team.vue';
import SignUp from './views/SignUp.vue';

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
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
});
