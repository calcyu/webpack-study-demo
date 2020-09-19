const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

console.log(path.resolve(__dirname, 'dist'),__dirname);
module.exports = {
  mode: "development", //development|production
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  }, //可以修改入口文件名
  output: {
    filename: 'bundle.js',
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  plugins:[
    new HtmlWebpackPlugin({title:'xxxx'}),
    new CleanWebpackPlugin(),
    new UglifyjsWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};