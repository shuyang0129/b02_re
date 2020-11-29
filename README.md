# React Project Starter

中文

- [關於](##關於)

- [路由守衛](##路由守衛)

- [環境變數](##環境變數)

- [路徑別名](##路徑別名)

- [執行專案](##執行專案)

English

- [About](##About)

- [Protected Routes](##Protected-Routes)

- [Environment Variables](##環境變數)

- [Alias Path](##Alias-Path)

- [Available Scripts](##Available-Scripts)

## 關於

這個專案的目的是作為下一個 React 專案的起始環境，包含許多方便開發的環境設定，包含路由守衛、環境變數、路徑別名、Redux、Redux Thunk、Redux 開發者工具...ˇ 等等。

## 路由守衛

- 開發者可以透過編輯 `@router/index.js` routes 物件，來新增專案所需路由(route)

```js
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
]
```

- 透過設定 `needLogin: true` 指定路由需要在登入情況下才能被訪問
- 透過設定 `exact: true` 指定路徑必須完全符合
- 透過設定 `state: {someInfo: 'blah blah..'}` 來透過路由傳遞`state`

```jsx
import { withRouter } from 'react-router-dom'

/**
 * @params
 * props.location.state => states defined from routes object
 **/
const Home = props => {
  return <div>{props.location.state.someInfo}</div>
}

export default withRouter(Home)
```

- 在使用著登入的情況下，路由守衛已包含`屏蔽使用者訪問登入/註冊頁面`的相關邏輯

## 環境變數

- `.env` 檔案專門放置不同環境下共用的環境變數
- `.env.development` 檔案專門放置開發環境下的環境變數
- `.env.production` 檔案專門放置正式環境下的環境變數
- 想要指定特定環境下執行的環境變數檔，可以透過新增 script 到 package.json，如

```json
"scripts": {
  "start:prod": "dotenv -e .env.production react-app-rewired start",
  "build:dev": "dotenv -e .env.development react-app-rewired build"
}
```

## 路徑別名

- 於`config-overrides.js`中定義需要的路徑別名

```js
config = rewireAliases.aliasesOptions({
  '@': path.resolve(__dirname, `${paths.appSrc}/`),
  '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
  '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
})(config, env)
```

- 即可在其他的檔案中使用別名引用

```js
import { Container, MainContent } from '@utils/style'
import { BACK } from '@constants'
```

## 執行專案

在專案根目錄，執行

### `yarn start`

在開發模式下執行專案<br />
在瀏覽器開啟 URL: [http://localhost:3000](http://localhost:3000) 檢視專案<br />
專案會有熱加載，同時支援錯誤訊息提示

### `yarn build`

將專案針對正式環境進行打包及優化，並建立`build`文件目錄<br />

<br />

---

<br />

## About

The project aims to provide a starter environment for incoming React projects. The starter provides multiple features such as protectd router, environment variables, alias path, Redux, Redux thunk, Redux Devtools and so much more.

## Protected Routes

- Developers could add routes for the project via routes object in `@router/index.js`

```js
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
]
```

- `needLogin: true` could prevent visiting when users are not loginned
- `exact: true` allows visiting when url is exact matched
- `state: {someInfo: 'blah blah..'}` allows send state via router

```jsx
import { withRouter } from 'react-router-dom'

/**
 * @params
 * props.location.state => states defined from routes object
 **/
const Home = props => {
  return <div>{props.location.state.someInfo}</div>
}

export default withRouter(Home)
```

- Protected routes includes the logic which prevents users visiting Login/Register page when they are already loginned

## Environment Variables

- `.env` sharing environment variables between environments
- `.env.development` storing environment variables only for development environment
- `.env.production` storing environment variables only for production environment
- Setting specific environment file for specific environment by adding script to package.json file:

```json
"scripts": {
  "start:prod": "dotenv -e .env.production react-app-rewired start",
  "build:dev": "dotenv -e .env.development react-app-rewired build"
}
```

## Alias Path

- Defining alias path in `config-overrides.js` file

```js
config = rewireAliases.aliasesOptions({
  '@': path.resolve(__dirname, `${paths.appSrc}/`),
  '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
  '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
})(config, env)
```

- Use alias path like example below:

```js
import { Container, MainContent } from '@utils/style'
import { BACK } from '@constants'
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
