import { env } from '@configs/environment';
import { HttpException } from '@exceptions/HttpException';
import { IUser } from '@models/interfaces/IUser';
import User from '@models/User';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const login = (req: Request, res: Response, next: NextFunction): void => {
	const { email, password } = req.body;

	User.findOne({ email: email })
		.exec()
		.then(async (user: IUser | null, err?: Error) => {
			if (err) {
				throw new HttpException(401, err.message);
			} else if (user === null) {
				throw new HttpException(401, 'Invalid credentials!');
			}

			if (await user.comparePassword(password)) {
				const jwtUser = {
					name: user.name,
					email: user.email,
					phone: user.phone,
					// todo: add role
				};

				const jwtToken = await jwt.sign(jwtUser, env.jwt.secret, {
					expiresIn: `${env.jwt.expire}ms`,
				});

				res.cookie('session', jwtToken, {
					expires: new Date(Date.now() + env.jwt.expire),
				});

				res.status(200).json({
					auth: true,
					token: jwtToken,
					message: 'User logged with success',
					user: jwtUser || {},
				});
			} else {
				throw new HttpException(401, 'Invalid credentials!');
			}
		})
		.catch((err: HttpException) => {
			next({
				code: err.code || 401,
				message: err.message,
			});
		});
};

export default { login };
