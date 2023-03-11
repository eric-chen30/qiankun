import store from './store'

const microApps = [
  {
    name: 'vue-sub1',
    entry: 'http://localhost:8082',
    activeRule: '/vue-sub1'
  },
  {
    name: 'vue-sub2',
    entry: 'http://localhost:8083',
    activeRule: '/vue-sub2'
  },
  {
    name: 'react-sub',
    entry: 'http://localhost:8084',
    activeRule: '/react-sub'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport',  // 子应用挂载div
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState, // 下发getGlobalState方法
      id: 'props基础传值方式'    // 微应用在mount生命周期的props中获取
    }
  }
})

export default apps