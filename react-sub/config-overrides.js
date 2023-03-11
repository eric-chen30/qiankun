const { name } = require('./package.json')

module.exports = {
  // 设置静态资源访问路径为绝对路径
  webpack: function override(config, env) {
    // 为了解决react子应用启动后，主应用第一次渲染会挂掉的问题，原因由于热更新导致的，复写webpack的时候禁止热重载
    // config.entry = config.entry.filter(
    //   e => !e.includes('webpackHotDevClient')
    // )
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.port = 8084;
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      };
      config.open = false;
      config.hot = false;
      // config.liveReload = false;
      return config;
    };
  },
}