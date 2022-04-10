import Vue from 'vue'
import VueRouter from 'vue-router'

import Caocaoshiji from '@/views/caocaoshiji'
import Chuci from '@/views/chuci'
import Shijing from '@/views/shijing'

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
  },
  {
    path: '/shijing',
    name: 'shijing',
    component: Shijing
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
