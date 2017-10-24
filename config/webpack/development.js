const environment = require('./environment');
const config = require('./config');
const merge = require('webpack-merge');

module.exports = merge(
  environment.toWebpackConfig(),
  config
);