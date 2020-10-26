const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
  mode: "production", //development|production
  output: {
    filename: '[name].[hash:7].js'
  },
  module:{
    rules:[
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins:[
    new UglifyjsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'[name][hash:8].css',
      chunkFilename: '[id].css'
    })
  ]
})
