import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'

const initialState = {
  count: 0
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
  return state
}
const store = createStore(reducer)

const increment = { type: 'increment' }
const decrement = { type: 'decrement' }

function Counter() {
  return (
    <div>
      <button onClick={() => store.dispatch(increment)}>+</button>
      <span>{store.getState().count}</span>
      <button onClick={() => store.dispatch(decrement)}>-</button>
    </div>
  )
}

store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>,
    document.getElementById('root')
  );
})

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
