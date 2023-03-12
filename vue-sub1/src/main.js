import Vue from 'vue'
import App from './App.vue'
import routes from "./router"
import VueRouter from "vue-router"

import store from './store'

Vue.config.productionTip = false

let instance = null;

function render(props = {}) {
  const { container, routerBase } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes
  })

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
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = ""; // 子项目内存泄露问题
  instance = null;
}
