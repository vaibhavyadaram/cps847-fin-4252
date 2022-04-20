import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/hourly',
    name: 'hourly',
    component: () => import('../components/HourlyComponent.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router