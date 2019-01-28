const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const development = process.env.NODE_ENV === "development";
const baseUrl = require("./jsconfig.json").compilerOptions.baseUrl;

module.exports = {
  entry: path.resolve(".", baseUrl, "index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(".", baseUrl, "index.html")     // custom html template that defines a div that react starts in 
    }),
    new MiniCssExtractPlugin({
      filename: "bundle-[hash].css"
    })
  ].concat(
    development
      ? [] 
      : [new OptimizeCssAssetsPlugin()]
  ),
  output: {
    filename: "bundle-[hash].js"
  },
  devtool: development ? "source-map" : false,
  mode: process.env.NODE_ENV,     // we pass the node env to what mode webpack should; webpack doesn't look at NODE_ENV automatically
  module: {
    rules: [    // defines rules for what loader to use for loading files - every time file is imported webpack checks if there is a loader for it, using these rules
      {   // use babel-loader for all javascript files
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {    // (loader chain) scss/css/sass files -> postcss-loader -> css-loader -> MiniCssExtractPlugin
        test: /\.(scss|css|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                // eslint-disable-next-line global-require
                require("postcss-node-sass")
              ]
            }
          },
        ]
      }
    ]
  }
};
