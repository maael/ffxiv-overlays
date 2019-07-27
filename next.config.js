const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/t/base': { page: '/t/base' },
      '/t/minidps': { page: '/t/minidps' },
      '/t/sparky': { page: '/t/sparky' },
    }
  },
  assetPrefix: !debug ? '/ffxiv-overlays' : ''
}