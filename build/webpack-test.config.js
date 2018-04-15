const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./utils');

const babelOptions = {
  babelrc: false,
  presets: ['es2015', 'stage-2'],
  plugins: ['transform-object-rest-spread'],
};

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const common = {
  module: {
    rules: [
      ...utils.styleLoaders(),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: { js: `babel-loader?${JSON.stringify(babelOptions)}` } },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: babelOptions,
        include: [
          resolve('webapp/src'),
          resolve('webapp/test'),
          resolve('../node_modules/vue-awesome'),
        ]
      },
    ],
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(de)$/),
    new FriendlyErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': '"testing"' }),
  ],
  devtool: devtool = '#inline-source-map',
};

const configs = [
  {
    entry: ['babel-polyfill', path.resolve('webapp/src', 'main.js')],
    output: {
      filename: 'app.js',
      publicPath: 'http://localhost:9091/js/',
    },
    resolve: {
      modules: ['node_modules', 'webapp/src'],
      alias: {
        vue: 'vue/dist/vue.js',
        src: resolve('webapp/src'),
      },
    },
  },
];

module.exports = configs.map(config => Object.assign({}, common, config));
