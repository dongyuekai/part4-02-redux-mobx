import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment_async, increment } from '../actions/counter.actions'
import { INCREMENT_ASYNC } from '../const/counter.const'

// takeEvery 接收 action
// put 触发 action
function* increment_async_fn(action) {
  // 延迟两秒
  yield delay(2000)
  // 触发同步action
  yield put(increment(action.payload))
}

export default function* counterSaga() {
  // 接收 异步 action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}