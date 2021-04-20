import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers/counter.reducer'
// import reducer from './reducers/modal.reducer'

import RootReducer from './reducers/root.reducer'

// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'

// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
// import counterSaga from './sagas/counter.saga'
// import modalSaga from './sagas/modal.saga'
import rootSaga from './sagas/root.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

// 启动counterSaga
// sagaMiddleware.run(counterSaga)
// sagaMiddleware.run(modalSaga)

sagaMiddleware.run(rootSaga)

