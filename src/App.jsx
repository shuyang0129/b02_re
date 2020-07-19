import React, { Fragment } from 'react'

import { routes } from '../src/router'
import RoutesManagement from './components/RoutesManagement'
import { Link } from 'react-router-dom'

const App = () => {
  const isLogin = false
  return (
    <Fragment>
      <h1>AppBar</h1>
      <hr />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <hr />
      <RoutesManagement routes={routes} isLogin={isLogin} />
    </Fragment>
  )
}

export default App
