const r = require('path').resolve,
      HTMLplugin = require('html-webpack-plugin'),
      MiniCSS = require('mini-css-extract-plugin');

const config = () => ({
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: r(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [['env', {modules: false}], 'react', 'stage-2']
      }
    }, {
      test: /\.(scss|css)/,
      use: [
        MiniCSS.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HTMLplugin({title: 'Dodging Pandas', template: './client/index.html'}),
    new MiniCSS()
  ]
})

module.exports = config;