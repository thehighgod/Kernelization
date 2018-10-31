// Webpack Configuration File
// Copywrite (C) 2018, Brett Broadhurst
// Please don't use this version of the webpack config for production!!!
// People will die.

// Everything is subject to change.

'use strict';

const webpack           = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectPaths      = require('./projectPaths.js');

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

// Server variables.
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = '/';

// Plugin configurations //

// Inject bundle.js and main.css into the index.html page.
// This may need to be revised to allow injecting into really any .html file.
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: projectPaths.htmlPath,
  filename: 'index.html',
  hash: true,
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'main.css'
});

// Configurations for the web stack
module.exports = {
    // This is where we specify our many possible entry points.
    entry: [
        projectPaths.indexJsPath,
    ],

    // The bundle.js file will built and sent to live in <project-root>/dist.
    output: {
        // This produces a virtual directory served by the webpack dev server.
        // It only exists when the server is running. It will not appear in your
        // project tree.
        path: projectPaths.buildPath,
        pathinfo: true,
        filename: 'bundle.js',
        publicPath: PUBLIC_PATH
    },

    // These are to do all our transpiling and compiling.
    // Babel is transpiled here and SCSS is compiled here.
    module: {
        rules: [
            // Javascript and JSX configurations.
            // This is needed so your React code written in the ES6 standard
            // can be rendered on all browsers (excluding the ones that babel
            // does not support, of course).
            {
                test: /\.(js|jsx)?$/,
                include: projectPaths.srcPath,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            compact: true
                        }
                    },
                ]
            },
            // CSS Preprocessor configurations.
            // Here you can load SCSS/SASS or LESS in order to make styling
            // more efficient and intuitive for development.
            // You will need the appropriate loaders in order for your
            // preprocessor of choice to be compiled.
            {
                test: /\.s?css$/,
                include: projectPaths.stylesPath,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    // I will find a better solution to this.
                    ExtractTextPlugin.loader,

                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            sourceMap: true,
                            minimize: true,
                        }
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            modules: true,
                            sourceMap: true
                        },
                    },
                ],
            },
            // Compiled CSS configurations.
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader')
                ],
            },
            // Static images configurations.
            // Here you can load your images using Base64 strings,
            // which helps optimize your code. Pretty cool, right?
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        // Convert files greater than 10KB to Base64 strings.
                        options: {
                            limit: 10000
                        },
                    },
                ],
            },
        ]
    },

    // This is the configuration for the development server.
    // I will add configurarions for production soon.
    devServer: {
        contentBase: '/',
        compress: true,
        disableHostCheck: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,

        // Connecting the frontend with the backend.
        proxy: {
            "/api/**": {
                target: "http://0.0.0.0:3001",
                secure: false,
                changeOrigin: true
            }
        },
    },

    // Here are our configured plugins.
    plugins: [
        ExtractTextPluginConfig,
        HtmlWebpackPluginConfig
    ]
}
