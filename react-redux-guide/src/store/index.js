import { createStore } from 'redux'
// import reducer from './reducers/counter.reducer'
// import reducer from './reducers/modal.reducer'

import RootReducer from './reducers/root.reducer'


export const store = createStore(RootReducer)
