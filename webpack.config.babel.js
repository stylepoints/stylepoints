import path from 'path';

import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import cssimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const isStaging = process.env.NODE_ENV == 'staging' ? true : false
const isProduction = process.env.NODE_ENV == 'production' ? true : false

console.log( "Building for", process.env.NODE_ENV || 'development')
export default {
	debug: false,
  devtool: (!isProduction) ? 'eval-source-map' : '',
  entry: (isProduction || isStaging) ? {
    // binary: [ './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './binary.js' ],
    // rating: [ './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './rating.js' ],
    multiple_choice: [ 'babel-polyfill', './vendor_scripts/bliss.js', './multiple_choice.js'  ],
    multiple_choice_sun: [ 'babel-polyfill', './vendor_scripts/bliss.js', './multiple_choice_sun.js'  ],
    multiple_choice_look: [ 'babel-polyfill', './vendor_scripts/bliss.js', './multiple_choice_look.js'  ],
  } : {
    // binary: [ 'webpack-hot-middleware/client', './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './binary.js' ],
    // rating: [ 'webpack-hot-middleware/client', './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './rating.js' ],
    multiple_choice: [ 'webpack-hot-middleware/client', 'babel-polyfill', './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './multiple_choice.js', ],
    multiple_choice_sun: [ 'webpack-hot-middleware/client', 'babel-polyfill', './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './multiple_choice_sun.js', ],
    multiple_choice_look: [ 'webpack-hot-middleware/client', 'babel-polyfill', './vendor_scripts/bliss.js', './vendor_scripts/hammer.min.js', './multiple_choice_look.js', ],
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    publicPath: isProduction ? 'https://d30xossl6j142v.cloudfront.net/' : '/'
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
	      test: /\.(jpg|png|gif|svg)$/,
	      loaders: [
	        'url?limit=10000',
					'image-webpack'
	      ]
	    },
      // Font Definitions
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
      // {
      //   test: /\.(ttf|otf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      //   loader: 'file?limit=80000&name=[name]-[hash].[ext]'
      // }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html_templates/index.tpl.ejs',
      filename: 'index.html',
      inject: 'body',
      chunks: ['multiple_choice']
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/index.tpl.ejs',
      filename: 'sun.html',
      inject: 'body',
      chunks: ['multiple_choice_sun']
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/index.tpl.ejs',
      filename: 'look.html',
      inject: 'body',
      chunks: ['multiple_choice_look', 'multiple_choice_sun']
    }),
		new HtmlWebpackPlugin({
      template: './html_templates/iframe.tpl.ejs',
      filename: 'iframe.html',
			src: isProduction ? 'http://app.stylepoints.com' : (isStaging ? 'http://app.staging.stylepoints' : 'http://localhost:8080'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/article.tpl.ejs',
      filename: 'article.html',
      inject: 'body',
      chunks: ['multiple_choice']
    }),
    new HtmlWebpackPlugin({
      template: './html_templates/article.tpl.ejs',
      filename: 'article_sun.html',
      inject: 'body',
      chunks: ['multiple_choice_sun']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
		new CopyWebpackPlugin([{from:'./robots.txt'}]),
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
      })
    ] : [

    ]
  ],
  postcss: [
    nested(),
    cssnext(),
    cssimport()
  ],
	imageWebpackLoader: {
    mozjpeg: {
      quality: 65
    },
    pngquant:{
      quality: "30-60",
      speed: 2
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  },
  bail: (isProduction || isStaging),
  cache: (!isProduction || !isStaging),
  stats: {
    children: false
  }
};
