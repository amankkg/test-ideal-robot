const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpack: (config, options) => {
    const tsConfigPathsPlugin = new TsConfigPathsPlugin()

    if (config.resolve.plugins) {
      config.resolve.plugins(tsConfigPathsPlugin)
    } else {
      config.resolve.plugins = [tsConfigPathsPlugin]
    }

    return config
  },
}
