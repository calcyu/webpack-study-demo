const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common,{
  mode: "production", //development|production
  output: {
    filename: '[name].[hash:7].js'
  },
  plugins:[
    new UglifyjsWebpackPlugin()
  ]
})
