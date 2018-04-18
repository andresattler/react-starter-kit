const merge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract('css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase!stylus-loader')
      }
    ]
  },
  plugins: [
    new CleanPlugin('dist'),
    new CopyPlugin([{from: 'public', to: './'}]),
    new ExtractTextPlugin('styles.css')
  ]
})
