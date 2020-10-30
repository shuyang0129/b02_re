import { LOGIN, PAGE_NOT_FOUND, REGISTER } from '@constants/routes'
import React, { Suspense, lazy, useCallback, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { withRouter } from 'react-router'

/**
 * @name Routes(路由清單)
 * @description 渲染自定義routes物件，並處理欲訪問需登入的路由會導向Login頁面的情況
 * @param {boolean} isLogin 當前使用者的登入狀態
 * @param {Object} routes 自定義的路由清單
 * @param {Array} routerInfo 路由資訊：[match, location, history]
 * @returns 需要登入，導致Login，否則導到對應component
 */
const Routes = ({ routes, ...routerInfo }) => {
  const isLogin = !!localStorage.getItem('token')

  return routes.map(route => {
    const Component = lazy(route.component) // 使用lazy載入component

    return (
      <Route key={route.name} exact={route.exact} path={route.path}>
        {route.needLogin && !isLogin ? (
          <Redirect to={LOGIN} />
        ) : (
          <Component {...routerInfo} />
        )}
      </Route>
    )
  })
}

/**
 * @name RoutesManagement(路由管理中心)
 * @description 提供自定義routes物件，交由路由中心處理，包括404頁面的導向以及是否需要登入的判斷
 * @param props 包含isLogin(使用者登入狀態)、routes(路由清單)，還有來自withRouter的路由資訊：match、location、history
 */
const RoutesManagement = props => {
  const { routes, location, history } = props

  // useCallback | 根據不同的exact條件，尋找對應的route path
  const matchedRoute = useCallback(
    route => {
      if (route.path === 'undefined') return false
      return route.exact
        ? route.path === location.pathname // 1) exact: true => 瀏覽器網址必須與路由路徑相同
        : route.path === location.pathname ||
            location.pathname.startsWith(route.path + '/') // 2) exact: false => 瀏覽器網址必須以路由路徑開頭
    },
    [location.pathname]
  )

  // useEffect | 如果url不存在，replace到404頁面，回上一頁就不會回到不存在的頁面
  useEffect(() => {
    const isRouteExist = routes.some(matchedRoute)
    if (!isRouteExist) history.replace(PAGE_NOT_FOUND)
  }, [history, matchedRoute, routes])

  // useEffect | 當location改變時，把對應的route.state資訊塞進location.state中
  useEffect(() => {
    if (routes && routes.length > 0) {
      const { state } = routes.find(matchedRoute)
      if (state) location.state = { ...location.state, ...state }
    }
  }, [location, routes, matchedRoute])

  // useEffect | 當使用者已經登入，不能訪問登入/註冊頁
  useEffect(() => {
    const isLogin = !!localStorage.getItem('token')

    if (isLogin && [LOGIN, REGISTER].includes(location.pathname)) {
      history.goBack()
    }
  }, [location, history])

  return (
    <Switch>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes {...props} />
      </Suspense>
    </Switch>
  )
}

// withRouter ｜ 讓routes中列出的components都可以取得路由資訊(props中：match, history, location)
export default withRouter(RoutesManagement)
