const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/index.js',
    },

    output: {
        path: path.join(__dirname, "app"),
        publicPath: './',
        filename: 'app.js'
    },

    devServer: {
        contentBase: path.join(__dirname, "app"),
        port: 2021,
        writeToDisk: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                  use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: "/",
                      },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },       

            {
                test: /\.(svg|eot|woff|woff2|ttf|otf)$/,
                exclude: /images/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/fonts",
                    }
                  }
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/images",
                    }
                  }
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },

        ]
    },

    

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new OptimizeCSSAssetsPlugin({}),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),

        new HtmlWebpackPlugin({
          filename: "about.html",
          template: "./src/about.html"
      }),

      new HtmlWebpackPlugin({
        filename: "how-it-works.html",
        template: "./src/how-it-works.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teachers.html",
        template: "./src/teachers.html"
      }),

      new HtmlWebpackPlugin({
        filename: "Pricing.html",
        template: "./src/Pricing.html"
      }),

      new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./src/contact.html"
      })
      
    ]
  } 