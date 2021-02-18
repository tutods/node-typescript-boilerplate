// Extra Functions
import connect from '@configs/connect';
import { env } from '@configs/environment';
import logging from '@configs/logging';
// Routes
import apiRoutes from '@index-routes';
import errorHandler from '@middlewares/error-handler.middleware';
// Middlewares
import logger from '@middlewares/logger.middleware';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// Packages
import express from 'express';

connect();

const app = express();

app.use('/public', express.static('./public'))

	.use(cookieParser())

	.use(cors())

	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())

	.use(express.urlencoded({ extended: true }))
	.use(express.json())

	// When need test what you receive
	// .use(function (req, res) {
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	res.write('you posted:\n');
	// 	res.end(JSON.stringify(req.body, null, 2));
	// })

	// Logger Middleware
	.use(logger)

	// Routes
	.use('/api', apiRoutes)

	// Route to redirect to front-end
	.get('/', (req, res) => {
		return res.status(200).json({ todo: 'Send to front!' });
	})

	// Error Handler Middleware
	.use(errorHandler)

	.listen(env.server.port, () => {
		logging.info(`[⚡️ SERVER RUNNING ON PORT ${env.server.port}]`);
	});
