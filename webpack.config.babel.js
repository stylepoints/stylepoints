import path from 'path';

import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import cssimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV ? true : false
console.log( "Building for ", isProduction ? "production" : "development")
export default {
	debug: false,
  devtool: !isProduction ? 'eval-source-map' : '',
  entry: {
    binary: [ './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './binary.js' ],
    rating: [ './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './rating.js' ],
    grid: [ './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './grid.js', ],
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        exclude: ['/node_modules/', '.gitignore'],
        include: __dirname
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
	      test: /\.(jpg|png|gif|svg)$/,
	      loaders: [
	        'url?limit=8000!image-webpack'
	      ]
	    },
      {
        test: /\.(ttf|svg|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
	  new HtmlWebpackPlugin({
      template: './html_templates/index-type.tpl.ejs',
      filename: 'index-grid.html',
      name: 'grid',
      script: 'grid.js',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/index-type.tpl.ejs',
      filename: 'index-binary.html',
      name: 'binary',
      script: 'binary.js',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/index-type.tpl.ejs',
      filename: 'index-rating.html',
      name: 'rating',
      script: 'rating.js',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/index.tpl.ejs',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    
    ...isProduction ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          dead_code: true,
	        unused: true,
	        warnings: false,
	        screw_ie8: true,
        },
        output: {
          comments: false
        }
      }),
    ] : [
      
    ]
  ],
  postcss: [
    nested(),
    cssnext(),
    cssimport()
  ],
  bail: isProduction,
  cache: !isProduction,
  stats: {
    children: false
  }
};
