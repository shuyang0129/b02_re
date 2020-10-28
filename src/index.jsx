import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import '@assets/styles/reset.css'

import {
  increment,
  decrement,
  asyncDecrement,
} from '@/actions/countActions'

import App from '@/App'
import store from '@/store'

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(asyncDecrement())

ReactDOM.render(
  // forceRefresh可以強迫在每次路由改變時重新加載頁面，解決每個頁面要scrollTop的問題，可以試試看
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
