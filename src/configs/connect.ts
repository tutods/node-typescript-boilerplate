import { env } from '@configs/environment';
import logging from '@configs/logging';
import mongoose from 'mongoose';

// Enable debug mode if you need see queries
// mongoose.set('debug', true);

export default (): void => {
	mongoose
		.connect(env.mongo.url, env.mongo.options)
		.then(() => {
			logging.info(`[⚡️ DATABASE ${env.mongo.database} CONNECTED]`);
		})
		.catch((error) => {
			logging.error(`[DATABASE ERROR: ${error.message}]`);
		});
};
