const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Dotenv = require('dotenv-webpack');

// console.log("ENVIRONMENT: ", process.env.NODE_ENV);
// console.log("GMAPS KEY: ", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    devServer: { 
      port: 8081, // change this if you want to change the frontend port the dev server is running on
      static: {
        directory: path.resolve(__dirname, 'build'),
        publicPath: '/',
      },
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
        // new Dotenv(),
    ],
}
