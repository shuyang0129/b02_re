import { Switch, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import React from 'react'

const routerGuard = (isLogin, routes, other) => {
  return routes.map(route => {
    return (
      <Route key={route.name} exact={route.exact} path={route.path}>
        {route.needLogin && !isLogin ? (
          <Redirect to="/login" />
        ) : (
          <route.component meta={route.meta} {...other} />
        )}
      </Route>
    )
  })
}

const RouterManager = ({ isLogin = false, routes, ...other }) => {
  return <Switch>{routerGuard(isLogin, routes, other)}</Switch>
}

export default withRouter(RouterManager) // 每個routes列出的component都可以取得路由資訊(props中)
