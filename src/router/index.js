import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import Login from '@/pages/Auth/Login.vue';
import Home from '@/pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'All | Login' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'All | Home', requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
