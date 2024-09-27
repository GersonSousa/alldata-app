import { createRouter, createWebHistory } from 'vue-router';
import AuthService from '@/services/AuthService';

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
    meta: { title: 'All | Home', requiresAuth: true },
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

router.beforeEach(async (to, from, next) => {
  document.title = to.meta?.title ?? 'All';

  if (to.meta.requiresAuth) {
    const authenticated = await AuthService.checkAuth();
    if (!authenticated) {
      return next({ name: 'Login' });
    }
  }
  next();
});

export default router;
