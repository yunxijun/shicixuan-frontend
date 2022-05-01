import Vue from 'vue'
import VueRouter from 'vue-router'

import Caocaoshiji from '@/views/caocaoshiji'
import Chuci from '@/views/chuci'
import Shijing from '@/views/shijing'
import Lunyu from '@/views/lunyu'
import Mengzi from '@/views/mengzi'
import Daxue from '@/views/daxue'
import Zhongyong from '@/views/zhongyong'
import Tangshi from '@/views/tangshi'
import Songci from '@/views/songci'
import Songshi from '@/views/songshi'

import Huajianji from '@/views/huajianji'
import Nantang from '@/views/nantang'
import AboutUs from '@/views/aboutus'

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
  },
  {
    path: '/tangshi',
    name: 'tangshi',
    component: Tangshi
  },
  {
    path: '/songci',
    name: 'songci',
    component: Songci
  },
  {
    path: '/songshi',
    name: 'songshi',
    component: Songshi
  },
  {
    path: '/nantang',
    name: 'nantang',
    component: Nantang
  },
  {
    path: '/huajianji',
    name: 'huajianji',
    component: Huajianji
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
