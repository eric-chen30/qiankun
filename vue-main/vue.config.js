const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8081,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap((args) => {
      args[0].title = 'qiankun'
      return args
    })
  }
})
