/**
 * @name Override Webpack Aliases
 * @description 設定React專案的alias路徑
 * @example
 * 'alias': path.resolve(__dirname, `${paths.appSrc}/`), 路徑從src開始
 * Ex: '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
 * @see https://github.com/aze3ma/react-app-rewire-aliases
 */
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    '@components': path.resolve(
      __dirname,
      `${paths.appSrc}/components/`
    ),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    '@router': path.resolve(__dirname, `${paths.appSrc}/router/`),
    '@api': path.resolve(__dirname, `${paths.appSrc}/api/`),
  })(config, env)
  return config
}
