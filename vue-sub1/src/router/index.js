import Vue from 'vue'
import VurRouter from 'vue-router'
import HelloWorldVue from '@/views/HelloWorld.vue'
import QianKun from '@/views/QianKun.vue'

Vue.use(VurRouter)

const routes = [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'HelloWorldVue',
    component: HelloWorldVue
  },
  {
    path: '/qiankun',
    name: 'QianKun',
    component: QianKun
  }
]

export default routes

