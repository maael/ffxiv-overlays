const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/t/base': { page: '/t/base' },
      '/t/base': { page: '/t/base', query: {simulator: true} }
    }
  },
  assetPrefix: !debug ? '/ffxiv-overlays' : ''
}