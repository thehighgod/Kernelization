// Webpack Configuration Paths
// Copywrite (C) 2018, Brett Broadhurst

'use strict';

const path = require('path');
const fs   = require('fs');
const url  = require('url');

const PROJECT_ROOT = fs.realpathSync(process.cwd());

// Helper functions.
function findPath(relativePath) {
    return path.resolve(PROJECT_ROOT, relativePath);
}

// Remember to change this when you encounter path errors.
module.exports = {
    buildPath: findPath('dist'),
    publicPath: findPath('frontend/public/'),
    htmlPath: findPath('frontend/public/index.html'),
    indexJsPath: findPath('frontend/src/index.js'),
    stylesPath: findPath('frontend/src/stylesheets'),
    packageJsonPath: findPath('package.json'),
    srcPath: findPath('frontend/src/'),
    nodeModules: findPath('node_modules'),
};
