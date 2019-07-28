const fs = require('fs')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

const themes = fs.readdirSync(path.join(__dirname, 'pages', 't'))
  .map((n) => `/t/${n.split('.').slice(0, -1).join('-')}`)
  .reduce((ob, page) => ({...ob, [page]: {page}}), {})

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      ...themes
    }
  },
  assetPrefix: !debug ? '/ffxiv-overlays' : ''
}