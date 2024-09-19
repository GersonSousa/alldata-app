import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Auth/Login.vue';
import Reset from '@/pages/Auth/Reset.vue';
import Forgot from '@/pages/Auth/Forgot.vue';
import NotFound from '@/pages/Error/NotFound.vue';

import Home from '@/pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'All | Login' },
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: { title: 'All | Trocar senha' },
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: { title: 'All | Esqueci minha senha' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'All | Home' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'All | Página não encontrada' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? 'All';
  next();
});

export default router;
