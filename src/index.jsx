import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import '@assets/styles/reset.css'

ReactDOM.render(
  // forceRefresh可以強迫在每次路由改變時重新加載頁面，解決每個頁面要scrollTop的問題，可以試試看
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
