import path from 'path';
import express from 'express';
import webpack from 'webpack';
import { webpackMiddleware, webpackHotMiddleware, staticServer } from './middleware/webpackMiddleware';
const env = process.env.NODE_ENV || 'development';

const isProduction = env === 'production';

const server = express();
server.set('port', 8080);

if (!isProduction) {
  server.use(webpackMiddleware);
  server.use(webpackHotMiddleware);
} else {
	server.use(express.static(__dirname + '/build'));
	server.use("/", staticServer);
}

server.listen(server.get('port'), () => {
  console.info(`🌎 🚀 Server running in ${server.get('env')} on port ${server.get('port')}`); // eslint-disable-line
});
