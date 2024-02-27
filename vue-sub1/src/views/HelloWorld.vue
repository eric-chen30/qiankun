<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p class="envIntro">当前处于<code class="qiankun-sign">{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
    </div>
    <div class="btns">
      <template v-if="isInQiankun">
        <button @click="openSubVue1">独立打开sub-vue1子应用</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to khala!'
    }
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
    }
  }
}
</script>

<style scoped>
</style>
