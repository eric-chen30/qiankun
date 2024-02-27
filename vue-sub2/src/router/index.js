import Vue from 'vue'
import VueRouter  from 'vue-router'
import HelloWorldVue from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hello',
    name: 'HelloWorld',
    component: HelloWorldVue
  }
]

export default routes
