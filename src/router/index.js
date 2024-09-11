import Home from '@/pages/Home/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'All | Home' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'All';
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

export default router;
