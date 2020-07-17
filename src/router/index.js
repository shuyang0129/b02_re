import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    needLogin: false, // 需要登入嗎?
    exact: true, // 需要使用絕對路徑？
    meta: {}, // 需要傳到components的額外資料，可從該component中的props.meta取得
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    needLogin: false,
    exact: true,
    meta: {
      id: 1,
      showTabBar: true,
      keepAlive: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    needLogin: true,
    exact: true,
    meta: {},
  },
  {
    path: '/*', // 捕獲其他不存在的頁面，導致404
    name: '404',
    component: PageNotFound,
    needLogin: false,
    exact: false,
    meta: {},
  },
]
