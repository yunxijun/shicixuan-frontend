import Vue from 'vue'
import VueRouter from 'vue-router'

import Caocaoshiji from '@/views/caocaoshiji'
import Chuci from '@/views/chuci'

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
  },
  {
    path: '/chuci',
    name: 'chuci',
    component: Chuci
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
