import controller from '@controllers/AuthController';
import { Router } from 'express';
const authRoutes = Router();

authRoutes.post('/login', controller.login);

// authRoutes.post('/reset-password', controller.createUser);
// authRoutes.post('/change-password/:token', controller.createUser);

export default authRoutes;
