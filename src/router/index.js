import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ruku from '../components/ruku.vue'
import jieg from '../components/jieg.vue'
import weiyi from '../components/weiyi.vue'
import gua from '../components/gua.vue'
import fei from '../components/fei.vue'
import xiu from '../components/xiu.vue'
import yiru from '../components/yiru.vue'
import yifen from '../components/yifen.vue'
import weier from '../components/weier.vue'
import hexiao from '../components/hexiao.vue'
import dideng from '../components/dideng.vue'
import digai from '../components/digai.vue'
import fangdeng from '../components/fangdeng.vue'
import fangwei from '../components/fangwei.vue'
import fanggai from '../components/fanggai.vue'
import zengshe from '../components/zengshe.vue'
import qiru from '../components/qiru.vue'
import qigua from '../components/qigua.vue'
import qixiu from '../components/qixiu.vue'
import qifei from '../components/qifei.vue'
import tou from '../components/tou.vue'
import denglu from '../views/denglu.vue'
import dingshi from '@/views/dingshi'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/dingshi',
      component:dingshi
    },
  {
    path:'/',
    name:'denglu',
    component:denglu
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tou',
    name: 'tou',
    component: tou
  },
  {
    path:'/ruku',
    name:'ruku',
    component:ruku,
  },
  {
    path:'/jieg',
    name:'jieg',
    component:jieg
  },
  {
    path:'/weiyi',
    name:'weiyi',
    component:weiyi
  },
  {
    path:'/gua',
    name:'gua',
    component:gua
  },
  {
    path:'/fei',
    name:'fei',
    component:fei
  },
  {
    path:'/xiu',
    name:'xiu',
    component:xiu
  },
  {
    path:'/yiru',
    name:'yiru',
    component:yiru
  },
  {
    path:'/yifen',
    name:'yifen',
    component:yifen
  },
  {
    path:'/weier',
    name:'weier',
    component:weier
  },
  {
    path:'/hexiao',
    name:'hexiao',
    component:hexiao
  },
  {
    path:'/dideng',
    name:'dideng',
    component:dideng
  },
  {
    path:'/digai',
    name:'digai',
    component:digai
  },
  {
    path:'/fangdeng',
    name:'fangdeng',
    component:fangdeng
  },
  {
    path:'/fangwei',
    name:'fangwei',
    component:fangwei
  },
  {
    path:'/fanggai',
    name:'fanggai',
    component:fanggai
  },
  {
    path:'/zengshe',
    name:'zengshe',
    component:zengshe
  },
  {
    path:'/qiru',
    name:'qiru',
    component:qiru
  },
  {
    path:'/qigua',
    name:'qigua',
    component:qigua
  },
  {
    path:'/qixiu',
    name:'qixiu',
    component:qixiu
  },
  {
    path:'/qifei',
    name:'qifei',
    component:qifei
  },
  {
    path:'/fu',
    component:() => import('@/views/fu')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
