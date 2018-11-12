// config/webpack.config.js - Webpack Configuration File
// Copywrite (C) 2018, Brett Broadhurst
// Everything is subject to change.

'use strict';

const webpack           = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectPaths      = require('./projectPaths.js');

// Do something with this later.
let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

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
    entry: [
        projectPaths.indexJsPath,
    ],

    output: {
        path: projectPaths.buildPath,
        pathinfo: true,
        filename: 'bundle.js',
        publicPath: PUBLIC_PATH
    },

    // Transpiling and compiling.
    module: {
        rules: [
            // Javascript and JSX configuration.
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
            // SCSS loading.
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
			
            // Static images configuration.
            // Load your images using Base64 strings.
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            limit: 10000
                        },
                    },
                ],
            },
			
			// Fonts configuration.
			// No special configs.
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: require.resolve('file-loader')
					}
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
		host: HOST,
        port: PORT,

        // Connecting the frontend with the backend.
        proxy: {
            "/api/v1/**": {
                target: `http://${HOST}:3001`,
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
