import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'
import Counter2Reducer from './counter2.reducer'
import ModalReducer from './modal.reducer'

// { counter: { count: 0 }, modal: { show: false } }
export default combineReducers({
  counter: CounterReducer,
  counter2: Counter2Reducer,
  modal: ModalReducer
})