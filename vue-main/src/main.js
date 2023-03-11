import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
// 进度条加载
import 'nprogress/nprogress.css'

// 阻止产生生产信息,让控制台更简洁
Vue.config.productionTip = false

const instance = new Vue({
  render: h => h(App),
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader (loading) {
  if (instance && instance.$children) {
    // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
    instance.$children[0].isLoading = loading
  }
}

// 给子应用配置加上loader方法，方法可选：loading状态发生变化的时候调用的方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})

const config = {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  // 挂载前回调
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  // 挂载后回调
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
    }
  ],
  // 卸载后回调
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ]
}

registerMicroApps(apps, config)
setDefaultMountApp(apps[0].activeRoule) // 默认打开第一个子项目
start()
