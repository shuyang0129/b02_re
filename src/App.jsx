import React from 'react'

import { routes } from '../src/router'
import RouterManager from './components/RouterManager'

const App = () => {
  const isLogin = false
  return <RouterManager routes={routes} isLogin={isLogin} />
}

export default App
