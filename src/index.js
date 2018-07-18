import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Counter from './components/Counter'

// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER_BY_ONE':
      state++
      return state
    case 'DECREMENT_COUNTER_BY_ONE':
      state--
      return state
    default:
      return state
  }
}

// create store
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Counter />
    </div>
  </Provider>
, document.getElementById('root'));
