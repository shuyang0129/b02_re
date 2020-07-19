/**
 * @name PathConstant(路由路徑常數)
 * @description 使用path[key]來取路徑字串，統一在這裡管理路徑字串
 */
export const path = {
  LOGIN: '/login',
  HOME: '/',
  ABOUT: '/about',
  PAGE_NOT_FOUND: '/404',
}

/**
 * @name Routes(路由清單)
 * @description 使用object來闡述每一個路由的資訊，方便統一管理
 * @param {string} path 路由路徑，統一使用path常數來給值，減少錯誤並且可以統一管理
 * @param {string} name 路由名稱
 * @param {Node} component page component(動態載入)，() => import('../path/to/component')
 * @param {boolean} needLogin 指定該路由是否需要登入才能訪問
 * @param {boolean} exact 是否使用絕對路徑，ex: {path: /about, exact: false} => /about, /about/me, /about/you，/about都會渲染
 * @param {object} meta 可以從這裡，透過路由，給予我們想要提供的額外資訊，ex: meta: {showTabCar: true}
 */
export const routes = [
  {
    path: path.LOGIN,
    name: 'login',
    component: () => import('../pages/Login'),
    needLogin: false,
    exact: true,
    meta: {
      greeting: 'I am Login Page',
    },
  },
  {
    path: path.HOME,
    name: 'home',
    component: () => import('../pages/Home'),
    needLogin: false,
    exact: true,
    meta: {
      id: 1,
      showTabBar: true,
      keepAlive: true,
    },
  },
  {
    path: path.ABOUT,
    name: 'about',
    component: () => import('../pages/About'),
    needLogin: true,
    exact: false,
    meta: {},
  },
  {
    path: path.PAGE_NOT_FOUND, // 捕獲其他不存在的頁面，導至404
    name: '404',
    component: () => import('../pages/PageNotFound'),
    needLogin: false,
    exact: true,
    meta: {},
  },
]
