import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SiteCreating from '../views/SiteCreating.vue'
import Contextads from '../views/Сontextads.vue'

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
  {
    path: '/context-ads',
    name: 'contextads',
    component: Contextads,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
