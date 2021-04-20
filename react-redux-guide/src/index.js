import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './store'

/**
 * react-redux
 * Provider
 * connect 
*/

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
