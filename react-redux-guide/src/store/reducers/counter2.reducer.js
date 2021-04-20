// redux-actions 简化写法
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter2.actions'

const initialState = {
  count: 0,
}

function handleIncrement(state, action) {
  return {
    count: state.count + action.payload //action.payload接收参数
  }
}
function handleDecrement(state, action) {
  return {
    count: state.count - 1
  }
}

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement
}, initialState)
