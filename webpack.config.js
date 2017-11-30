const path = require('path')
const webpack = require('webpack')

let config = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: ['react-hot-loader/webpack', 'babel-loader']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin()
  )
} else {
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.entry = ['react-hot-loader/patch', config.entry]
}

module.exports = config
