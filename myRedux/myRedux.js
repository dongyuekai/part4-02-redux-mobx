/*
  createStore(reducer, preloadedState, enhancer)
  {
    getState,
    dispatch,
    subscribe
  }
*/

function createStore(reducer, preloadedState, enhancer) {
  // reducer类型判断
  if (typeof reducer !== 'function') throw new Error('reducer必须是函数')
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer必须是函数')
    }
    return enhancer(createStore)(reducer, preloadedState)
  }
  // 状态
  let currentState = preloadedState
  // 订阅者
  let currentListeners = []

  // 获取状态
  function getState() {
    return currentState
  }

  // 触发action方法
  function dispatch(action) {
    // 判断action是否是一个对象
    if (!isPlainObject(action)) throw new Error('action必须是一个对象')
    // 判断action中的type属性是否存在
    if (typeof action.type === 'undefined') throw new Error('action对象中必须有type属性')
    // 调用reducer函数 处理状态
    currentState = reducer(currentState, action)
    // 调用订阅者 通知订阅者状态发生了变化
    for (let i = 0; i < currentListeners.length; i++) {
      let listener = currentListeners[i]
      listener()
    }
  }

  // 订阅状态的改变
  function subscribe(listener) {
    currentListeners.push(listener)
  }

  // 默认调用一次 dispatch 存储初始状态（通过reducer函数传递的默认状态）
  dispatch({ type: 'initAction' })

  return {
    getState,
    dispatch,
    subscribe
  }

}


// 判断obj参数是否是对象
function isPlainObject(obj) {
  // 排除基本数据类型和null
  if (typeof obj !== 'object' || obj === null) return false
  // 区分数组和对象 原型对象的比对方式
  let proto = obj
  // Object 就是对象的原型类
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}


// applyMiddleware就是和enhancer函数差不多的实现方式
// 返回一个增强的store
function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      // 创建store
      let store = createStore(reducer, preloadedState)
      // 阉割版的store
      let middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      // 调用中间件第一层函数 参数传递阉割版的store
      let chain = middlewares.map(middleware => middleware(middlewareAPI))
      let dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose() {
  // 获得中间件第一层函数返回的函数 return function (next) {}
  let funcs = [...arguments]
  return function (dispatch) {
    for (let i = funcs.length - 1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}