import { createRouter, createWebHistory } from 'vue-router'

import Imprint from '@/views/Imprint'
import Home from '@/views/Home'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: Imprint
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), routes
})

export default router;
