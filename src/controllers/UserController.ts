import { HttpException } from '@exceptions/HttpException';
import { IUser } from '@models/interfaces/IUser';
import User from '@models/User';
import { NextFunction, Request, Response } from 'express';

const getAll = (req: Request, res: Response, next: NextFunction): void => {
	User.find()
		.select(['-password'])
		.exec()
		.then((data: IUser[]) => {
			return res.status(200).json({
				users: data,
				count: data.length,
			});
		})
		.catch((error: Error) => {
			next({
				message: error.message,
				code: 404,
			});
		});
};

const getById = (req: Request, res: Response, next: NextFunction): void => {
	const id = req.params.id;

	User.findById(id)
		.exec()
		.then((user: IUser | null, err?: Error) => {
			if (err) {
				throw new HttpException(400, err.message);
			} else if (user === null) {
				throw new HttpException(404, 'User not found!');
			}

			return res.status(200).send(user);
		})
		.catch((error: HttpException) => {
			next({
				message: error.message,
				code: error.code || 400,
			});
		});
};

const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const body = req.body;

	try {
		const newUser = await new User(body).save();

		if (newUser) {
			res.status(201).json({
				message: 'User created with success!',
				user: newUser,
			});
		} else {
			throw new Error('Error on create user!');
		}
	} catch (err) {
		next({
			message: err.message,
			code: 400,
		});
	}
};

export default { getAll, getById, createUser };
