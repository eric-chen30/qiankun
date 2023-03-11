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
      routerBase: item.activeRule
    }
  }
})

export default apps