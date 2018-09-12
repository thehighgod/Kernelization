// Webpack Development Configuration File
// Copywrite (C) 2018, Brett Broadhurst
// Baby metal rules.

'use strict';

const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';


// Plugin configurations
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'frontend/public', 'index.html'),
  filename: 'index.html',
  title: "Kernalization",
  hash: true,
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'main.css'
});


// Configurations for the web stack
module.exports = {
    // This will be changed when the application is deployed.
    // But we want our precious debug messages for the time being.
    mode: 'development',

    // We enter the app from index.js in frontend.
    entry: [
        path.join(__dirname, 'frontend/index.js')
    ],

    // The bundle.js file will built and sent to live in frontend/build.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    // These are to do all our transpiling and compiling.
    // Babel is transpiled here and SCSS is compiled here.
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            compact: true
                        }
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractTextPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },

    // This is the configuration for the development server.
    // I will add configurarions for production soon.
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        port: 3000,

        proxy: {
            "/api/**": {
                target: "http://127.0.0.1:3001",
                secure: false,
                changeOrigin: true
            }
        },

        disableHostCheck: true,
    },

    // Here are our plugins.
    plugins: [
        ExtractTextPluginConfig,
        HtmlWebpackPluginConfig
    ]
}
