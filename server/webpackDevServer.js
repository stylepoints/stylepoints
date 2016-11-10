import express from 'express';
import { webpackMiddleware, webpackHotMiddleware } from './middleware/webpackMiddleware';

const server = express();
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const webpackIsomorphicTools
= new WebpackIsomorphicTools(require('../webpack-isomorphic-tools-configuration')); // eslint-disable-line

server.use(webpackMiddleware);
server.use(webpackHotMiddleware);
webpackIsomorphicTools.refresh();
