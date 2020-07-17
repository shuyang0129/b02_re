import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/reset.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <h1>Hello</h1>
    <div>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
