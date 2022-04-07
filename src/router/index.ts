import { createRouter, createWebHistory } from 'vue-router';

//Routes
const routes = [
  {
    path: '/',
    meta: { title: 'Start' },
    component: () => import('../views/Start.vue'),
  },
  {
    path: '/notes',
    meta: { title: 'Notes' },
    component: () => import('../views/Notes.vue'),
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
