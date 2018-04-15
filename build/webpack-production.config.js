const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: { js: `babel-loader?${JSON.stringify(babelOptions)}` } },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: babelOptions,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new UglifyJsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(de)$/),
  ],
};

const configs = [
  {
    entry: ['babel-polyfill', path.resolve('webapp/src', 'main.js')],
    output: { filename: 'js/app.js' },
    resolve: {
      modules: ['node_modules', 'webapp/src'],
      alias: {
        vue: 'vue/dist/vue.min.js',
        src: resolve('webapp/src'),
      },
    },
  },
];

module.exports = configs.map(config => Object.assign({}, common, config));
