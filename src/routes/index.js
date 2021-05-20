import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/testComp.vue'),
  },
  {
    path: '/hello',
    name: 'Helloworld',
    component: () => import('../components/HelloWorld.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
