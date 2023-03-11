<template>
  <div id="app">
    <div class="layout-header">
      <div class="logo">QIANKUN-ERICCHEN</div>
      <div class="sub-apps">
        <div class="sub-apps-item" v-for="item in microApps" :class="{active: item.activeRule === current}" :key="item.name" @click="goto(item)">{{ item.name }}</div>
        <div class="userinfo">主应用的state：{{ JSON.stringify(state) }}</div>
      </div>
    </div>
    <div class="content">
      Hello,QIANKUN!!!!
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import microApps from './micro-app'
// 引入全局状态
import store from '@/store'

export default {
  name: 'App',
  data() {
    return {
      isLoading: true,
      microApps,
      current: ''
    }
  },
  computed: {
    state() {
      // 如果只需要取某个命名空间下的state，比如 user ，可以加上参数
      // return store.getGlobalState('user')

      // 返回所有的state则不需添加参数
      return store.getGlobalState()
    }
  },  
  watch: {
    isLoading(val) {
      if (val) {
        NProgress.start()
      } else {
        this.$nextTick(() => {
          NProgress.done()
        })
      }
    }
  },  
  methods: {
    goto (item) {
      console.log(item)
      this.current = item.activeRule
      history.pushState(null, item.activeRule, item.activeRule) // 没引入路由，所以不能用路由切换
    }
  },
  created() {
    const path = window.location.pathname    
    if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
      this.current = path
    }
    NProgress.start()
  }
}
</script>

<style>
html, body{
  margin: 0 !important;
  padding: 0;
}
.content {
  height: 200px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: #42b983;
}
.layout-header{
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 50px;
  position: relative;
}
.logo {
  float: left;
  margin: 0 50px;
  color: rgb(234, 58, 143);
  font-weight: bold;
}
.sub-apps {
  display: flex;
  margin: 0;
  overflow: hidden;
}
.sub-apps-item {
  padding: 0 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
.sub-apps-item.active {
  color: #42b983;
}
.userinfo {
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  padding: 0 40px;
}
</style>
