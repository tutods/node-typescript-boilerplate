import logging from '@configs/logging';
import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
	const timeStarted = Date.now();
	const path = req.path;

	/** Log the req */
	logging.info(`[${req.method}] - URL: ${path}`);

	res.on('finish', () => {
		const finishTime = Date.now() - timeStarted;

		/** Log the res */
		logging.info(
			`[${req.method} - ${res.statusCode}] - URL: ${path} in ${finishTime}ms`
		);
	});
	next();
};
