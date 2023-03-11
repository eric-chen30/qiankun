/**
 * 应用间通信：
 * 1.挂载微应用时直接props传值
 * 2.initGlobalState定义全局状态（推荐）
 *    2.1-initGlobalState  初始化 state
 *    2.2-onGlobalStateChange  监听状态变更
 *    2.3-setGlobalState   修改状态
 *    2.4-offGlobalStateChange  移除监听
 * 3.定义全局的状态值
 *    主应用中定义全局状态，可以使用vuex、redux等状态管理器来定义。
 *    定义好全局状态，可以定义一个全局的类，类中声明两个方法：获取全局状态、修改全局状态
 *    类定义好后，通过第一种方式props进行传递，微应用在mount生命周期通过props进行接收
 */

import { initGlobalState } from 'qiankun'
import Vue from 'vue'

// 父应用初始化state，通过Vue.observable()让initialState变为可响应的
const initialState = Vue.observable({
  user: {
    userid: '20000210',
    name: 'ERIC CHEN'
  }
})

// actions：返回对象MicroAppStateActions,有三个方法：
// onGlobalStateChange
// setGlobalState
// offGlobalStateChange
const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prevState) => {
  console.log('stateChange:', JSON.stringify(newState), JSON.stringify(prevState))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子集对象
  // 无key，表示取整个对象
  return key ? initialState[key] : initialState
}

export default actions

