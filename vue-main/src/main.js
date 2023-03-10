import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

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

registerMicroApps(microApps, config)
setDefaultMountApp(microApps[0].activeRoule) // 默认打开第一个子项目
start()
