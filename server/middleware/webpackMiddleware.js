import path from 'path';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import express from 'express';


import config from '../../webpack.config.babel';

const compiler = webpack(config);

export const webpackMiddleware = devMiddleware(compiler, {
	historyApiFallback: true,
	hot: true,
	inline: true,
	// quiet: true,
	// noInfo: false,
	stats: {
		colors: true
	}
});
export const webpackHotMiddleware = hotMiddleware(compiler);

export const staticServer = express.static(path.join(compiler.outputPath));
