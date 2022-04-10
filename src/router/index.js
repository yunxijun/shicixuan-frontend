import Vue from 'vue'
import VueRouter from 'vue-router'

import Caocaoshiji from '@/views/caocaoshiji'
import Chuci from '@/views/chuci'
import Shijing from '@/views/shijing'
import Lunyu from '@/views/lunyu'
import Mengzi from '@/views/mengzi'
import Daxue from '@/views/daxue'
import Zhongyong from '@/views/zhongyong'

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
  },
  {
    path: '/lunyu',
    name: 'lunyu',
    component: Lunyu
  },
  {
    path: '/daxue',
    name: 'daxue',
    component: Daxue
  },
  {
    path: '/zhongyong',
    name: 'zhongyong',
    component: Zhongyong
  },
  {
    path: '/mengzi',
    name: 'mengzi',
    component: Mengzi
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
