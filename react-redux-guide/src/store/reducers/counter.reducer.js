
import { INCREMENT, DECREMENT } from '../const/counter.const'

const initialState = {
  count: 0,
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        count: state.count - action.payload
      }
    default:
      return state
  }
  return state
}
export default reducer