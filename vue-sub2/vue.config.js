const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 8083,
    // qiankun 是通过 fetch 去获取子应用注册时配置的静态资源url，所有静态资源必须是支持跨域的，那就得设置允许源了
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 涉及到子应用名称的，都统一使用package中的name字段，官方也是推荐使用的这个name
      library: `${name}-[name]`,
      // 需要打包成umd格式，是为了让 qiankun 拿到子应用export 的生命周期函数
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
