import Vue from 'vue'
import VueRouter from 'vue-router'

import Caocaoshiji from '@/views/caocaoshiji'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/caocaoshiji'
  },
  {
    path: '/caocaoshiji',
    name: 'caocaoshiji',
    component: Caocaoshiji
  }
]

const router = new VueRouter({
  routes
})

export default router
