import { createRouter, createWebHistory } from 'vue-router';

//Routes
const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/:page',
    component: () => import('../views/NotFound.vue'),
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
