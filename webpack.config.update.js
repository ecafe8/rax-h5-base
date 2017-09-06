const webpack = require('webpack'); // eslint-disable-line
const RaxWebpackPlugin = require('rax-webpack-plugin');
const IS_DEV = process.env.NODE_ENV !== 'production';
const path = require('path'); // eslint-disable-line
const srcPath = path.resolve('./src');

module.exports = (config) => {
  const updateConfig = {
    ...config
  };
  updateConfig.plugins.push(
    new RaxWebpackPlugin({
      target: 'bundle',
      externalBuiltinModules: false
    })
  );
  return updateConfig;
};
