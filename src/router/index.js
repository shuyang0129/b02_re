import * as route from '@constants/routes'

/**
 * @name Routes(路由清單)
 * @description 使用object來闡述每一個路由的資訊，方便統一管理
 * @param {string} path 路由路徑，統一使用path常數來給值，減少錯誤並且可以統一管理
 * @param {string} name 路由名稱
 * @param {Node} component page component(動態載入)，() => import('../path/to/component')
 * @param {boolean} needLogin 指定該路由是否需要登入才能訪問
 * @param {boolean} exact 是否使用絕對路徑，ex: {path: /about, exact: false} => /about, /about/me, /about/you，/about都會渲染
 * @param {object} state 要放進location.state的額外資訊，ex: state: {showTabCar: true}
 */
export const routes = [
  {
    path: route.LOGIN,
    name: 'login',
    component: () => import('../pages/Login'),
    needLogin: false,
    exact: true,
    state: {
      greeting: 'I am Login Page',
    },
  },
  {
    path: route.REGISTER,
    name: 'register',
    component: () => import('../pages/Register'),
    needLogin: false,
    exact: true,
    state: {
      greeting: 'I am Register Page',
    },
  },
  {
    path: route.HOME,
    name: 'home',
    component: () => import('../pages/Home'),
    needLogin: false,
    exact: true,
    state: {
      id: 1,
      showTabBar: true,
      keepAlive: true,
    },
  },
  {
    path: route.ABOUT,
    name: 'about',
    component: () => import('../pages/About'),
    needLogin: true,
    exact: false,
    state: {},
  },
  {
    path: route.MINE,
    name: 'mine',
    component: () => import('../pages/Mine'),
    needLogin: true,
    exact: false,
    state: {},
  },
  {
    path: route.PAGE_NOT_FOUND, // 捕獲其他不存在的頁面，導至404
    name: '404',
    component: () => import('../pages/PageNotFound'),
    needLogin: false,
    exact: true,
    state: {},
  },
]
