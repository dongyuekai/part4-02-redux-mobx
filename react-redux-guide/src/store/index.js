import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers/counter.reducer'
// import reducer from './reducers/modal.reducer'

import RootReducer from './reducers/root.reducer'
import logger from './middleware/logger'
import test from './middleware/test'


export const store = createStore(RootReducer, applyMiddleware(logger, test))
