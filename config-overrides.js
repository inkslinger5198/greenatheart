const path = require('path');
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add the necessary fallbacks for missing modules
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "zlib": require.resolve("zlib-browserify"),
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  };

  // Add the process polyfill
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process',
    })
  );

  return config;
};
