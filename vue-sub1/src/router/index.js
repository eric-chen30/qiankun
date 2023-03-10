import Vue from 'vue'
import VurRouter from 'vue-router'
import HelloWorldVue from '@/components/HelloWorld.vue'

Vue.use(VurRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorldVue',
    component: HelloWorldVue
  }
]

export default routes

