import './public-path';
import Vue from 'vue'
import App from './App.vue'
import routes from "./router"
import VueRouter from "vue-router"
import store from './store'
import '../elementui/element-ui'

Vue.config.productionTip = false

let router = null
let instance = null;

function render(props = {}) {
  console.log(props);
  const { container, routerBase } = props
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
    scrollBehavior: () => ({ y: 0 }),
    routes
  })

  console.log(router)

  instance = new Vue({
    router,
    store,
    render: h => h(App) 
  }).$mount(container ? container.querySelector("#app") : "#app")
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

export async function bootstrap() {}

// 子应用挂载后，可通过 props 获取主应用的状态值
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  // 接受主应用的数据和方法
  Vue.prototype.$error = props.data.error
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = ""; // 子项目内存泄露问题
  instance = null;
}
