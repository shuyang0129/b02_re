import React, { Fragment, useEffect, useState } from 'react'

import { routes } from '../src/router'
import RoutesManagement from './components/RoutesManagement'

const App = () => {
  return (
    <Fragment>
      <RoutesManagement routes={routes} />
    </Fragment>
  )
}

export default App
