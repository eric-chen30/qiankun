<template>
  <div id="app">
    <!-- 左侧菜单 -->
    <div class="aside-menu">
      <el-menu
        default-active="2"
        @select="handleSelect"
        class="el-menu-vertical-demo"
      >
        <el-menu-item-group>
          <el-menu-item index="/hello" route="/hello">Hello</el-menu-item>
          <el-menu-item index="/qiankun" route="/qiankun">Qiankun</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    }
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
.aside-menu {
  position: relative;
  border-right: 1px solid #F7F7F7;
  margin-bottom: 0;
  height: calc(100vh - 60px);
  width: 200px;
}
.content {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  height: calc(100vh - 60px);
  background: #F7F7F7;
}
</style>
