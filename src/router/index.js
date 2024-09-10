import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';

import Login from '@/pages/Auth/Login.vue';
import Forgot from '@/pages/Auth/Forgot.vue';
import Reset from '@/pages/Auth/Reset.vue';
import Home from '@/pages/Home/Home.vue';
import Error from '@/pages/Error/Error.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'All | Login' },
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: { title: 'All | Recuperar senha' },
  },
  {
    path: '/reset/:id/:forgotToken',
    name: 'Reset Password',
    component: Reset,
    meta: { title: 'All | Resetar senha' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'All | Home', requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
    meta: { title: 'All | Página não encontrada' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'All';
  document.title = to.meta.title ? to.meta.title : defaultTitle;

  if (to.meta.requiresAuth) {
    const token = Cookies.get('token');
    if (!token) {
      return next({ name: 'Login' });
    }
  }

  next();
});

export default router;
