// config/prod.config.js - Production Webpack Config
// Copywrite (C) 2018, Brett Broadhurst
//

"use strict";

const webpack              = require("webpack");
const path                 = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin       = require("uglifyjs-webpack-plugin");
const ManifestPlugin       = require("webpack-manifest-plugin");
const ChunkManifestPlugin  = require("chunk-manifest-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Production Settings
module.exports = {
	mode: "production",

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	
	devtool: "hidden-source-map",

	entry: {
		app: [
			"./frontend/src/index.js",
		],
		vendor: [
			"react",
			"react-dom"
		]
	},

	output: {
		path: __dirname + "/dist/frontend/",
		filename: "[name].[chunkhash].js",
		publicPath: "/",
	},

	resolve: {
		extensions: [".js", ".jsx"],
		modules: [
			"frontend",
			"node_modules"
		]
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				include: path.join(__dirname, "frontend", "src"),
				use: [
					{
						loader: "babel-loader",
						query: {
							compact: true
						}
					}
				]
			},
			{
				test: /\.s?css$/,
				include: path.join(__dirname, "frontend", "src", "stylesheets"),
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: require.resolve("css-loader"),
						options: {
							sourceMap: true
						}
					},
					{
						loader: require.resolve("sass-loader"),
						options: {
							modules: true,
							sourceMap: true
						}
					},
				]
			},
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader')
                ],
            },
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production"),
			}
		}),

		new MiniCssExtractPlugin({
			filename: "k.[contenthash].css",
			chunkFilename: "[id].scss"
		}),

		new ManifestPlugin({
			basePath: "/"
		}),

		new ChunkManifestPlugin({
			filename: "chunk-manifest.json",
			manifestVariable: "webpackManifest"
		}),
	]
};
