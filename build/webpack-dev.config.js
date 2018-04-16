const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

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
          include: [
            resolve('webapp/src'),
            resolve('webapp/test'),
            resolve('../node_modules/vue-awesome'),
          ]
        },
        {
          test: /\.scss$/,
          exclude:
            /node_modules/,
          loaders:
            ['style-loader', 'sass-loader'],
        }
        ,
        {
          test: /\.css$/,
          loaders:
            ['style-loader', 'css-loader']
        }
        ,
      ],
    },
    devServer: {
      hot: true,
      inline:
        true,
      host:
        'localhost',
      port:
        9091,
      headers:
        {
          'Access-Control-Allow-Origin':
            '*'
        }
      ,
    }
    ,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new BundleAnalyzerPlugin({
        analyzerHost: '0.0.0.0',
        analyzerPort: 7999,
        openAnalyzer: false,
      }),
      new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(de)$/),
      new FriendlyErrorsPlugin(),
    ],
    devtool:
      devtool = 'source-map',
  }
;

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
      extensions: ['*', '.js', '.vue', '.json'],
    },
  },
];

module.exports = configs.map(config => Object.assign({}, common, config));
