var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

module.exports = {
    devtool: 'cheap-module-source-map',
    /*        devtool: 'eval',*/
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
      },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css'),
        getImplicitGlobals(),
/*        new webpack.HotModuleReplacementPlugin(),*/
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'public/'),
            debug: false,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
              },
            compressor: {
                warnings: false
              }
          }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            cutCode: JSON.stringify(true),
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: '"production"'
              }
          })
    ],
    module: { //Обновлено
        preLoaders: [ //добавили ESlint в preloaders
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, 'src')
                ]
              }
        ],
        loaders: [ //добавили babel-loader
            {
                loaders: ['babel-loader'],
                exclude: [nodeModulesDir],
                include: [
                    path.resolve(__dirname, 'src')
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
              },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
              },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
              },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
              },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
              },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
              },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
              },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
              }
        ]
      }
  };

function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    });
}
