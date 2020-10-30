import React, { Fragment } from 'react'

import RoutesManagement from '@components/RoutesManagement'
import { routes } from '@router'

const App = () => {
  return (
    <Fragment>
      <RoutesManagement routes={routes} />
    </Fragment>
  )
}

export default App
