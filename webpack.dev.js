const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
  mode: "development", //development|production
  devtool: "source-map",
  module:{
    rules:[
      {
        test: /\.sass$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})