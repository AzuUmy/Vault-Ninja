import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Plus',
      name: 'plus',

      //component: () => import('../views/CreatSecureAccount.vue') import the route of the element to the rourter

    },
    {
      path: '/Key',
      name: 'key',
    },
  ]
})

export default router
