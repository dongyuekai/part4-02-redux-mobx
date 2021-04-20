import { takeEvery, put, delay } from 'redux-saga/effects';
import { show } from '../actions/modal.actions';
import { SHOWMODAL_ASYNC } from '../const/modal.const';


// takeEvery 接收 action
// put 触发 action
function* showModal_async_fn() {
  // 延迟两秒
  yield delay(2000)
  // 触发同步action
  yield put(show())
}

export default function* modalSaga() {
  // 接收 异步 action
  yield takeEvery(SHOWMODAL_ASYNC, showModal_async_fn)
}