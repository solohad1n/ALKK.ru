import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SiteCreating from '../views/SiteCreating.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/site-creating',
    name: 'SiteCreating',
    component: SiteCreating,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
