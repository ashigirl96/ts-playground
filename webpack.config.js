const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {

  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', ".scss"],
      alias: {
        components: path.resolve(__dirname, './src/components/')
      }
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          },
          exclude: /dist/,
        },
        {
          test: /.scss$/,
          use: [
            {
              // Creates `styles` nodes from JS strings
              loader: "style-loader", options: { injectType: 'styleTag'},
            },
            {
              loader: "css-loader?modules", // modulesをつけることでimport styles from できる
            },
            // "css-loader", // Translates css into common-js
            "sass-loader", // Compiles sass to css
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.development': !!(env && !env.production),}),
      new ForkTsCheckerWebpackPlugin({eslint: true})
    ]
  }
};
