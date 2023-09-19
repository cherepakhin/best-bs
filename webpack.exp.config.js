var webpack            = require('webpack');
var path               = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var cssName            = 'styles-[hash].css';
var jsName             = 'bundle-[hash].js';
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true)
    }
  }),
  new ExtractTextPlugin(cssName)
];

plugins.push(new webpack.DefinePlugin({
            cutCode: JSON.stringify(true),
            'process.env': {
                NODE_ENV: '"production"'
              }
          })
);

plugins.push(
  new CleanWebpackPlugin(['public/assets/'], {
    root: __dirname,
    verbose: true,
    dry: false
  })
);
plugins.push(new webpack.optimize.DedupePlugin());
plugins.push(new webpack.optimize.OccurenceOrderPlugin());
plugins.push(getImplicitGlobals());
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  debug: false,
  resolve: {
    root:               path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  plugins,
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: 'public/'
    },
  module: {
    loaders: [
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
