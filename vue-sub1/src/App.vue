<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to VUE-SUB1!!!"/>
    <div>
      <p class="envIntro">当前处于<code class="qiankun-sign">{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
    </div>
    <div class="btns">
      <template v-if="isInQiankun">
        <button @click="gotoSubReact">从当前子应用内跳转到`react-sub`子应用</button>
        <button @click="openSubVue1">独立打开sub-vue1子应用</button>
      </template>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  methods: {
    openSubVue1 () {
      if (!this.isInQiankun) {
        alert('当前已经是单独运行的子应用')
        return
      }
      // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
      window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
    },
    gotoSubReact () {
      history.pushState(null, 'react-sub', '/react-sub')
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.envIntro {
  font-size: 24px;
  font-weight: bold;
}
.qiankun-sign {
  color: rgb(234, 58, 143);
}
.btns{
  margin: 100px;
}
.btns button{
  margin: 0 10px;
}
</style>
