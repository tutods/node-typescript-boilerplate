import { HttpException } from '@exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';

export default (
	err: HttpException,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const { code, message } = err;

	if (!err) {
		next();
	}

	res.status(code || 500).json({
		code,
		message,
	});
};
