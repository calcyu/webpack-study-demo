const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "production", //development|production
  entry: {
    app: './src/index.js',
  }, //可以修改入口文件名
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({title:'xxxx'}),
    new CleanWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit: 9000
            }
          }
        ]
      }
    ]
  }
};