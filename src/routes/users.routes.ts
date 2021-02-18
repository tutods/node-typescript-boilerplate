import controller from '@controllers/UserController';
import { Router } from 'express';
const userRoutes = Router();

userRoutes
	.get('/', controller.getAll)
	.get('/:id', controller.getById)
	.post('/', controller.createUser);

export default userRoutes;
