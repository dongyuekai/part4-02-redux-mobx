import { INCREMENT, DECREMENT } from '../const/counter.const'

// action是一个对象
export const increment = (payload) => ({ type: INCREMENT, payload })
export const decrement = (payload) => ({ type: DECREMENT, payload })

// action变成一个函数了 中间件里就可以回传回来一个dispatch 这里就会有一个参数接收dispatch
export const increment_async = payload => dispatch => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000);
}