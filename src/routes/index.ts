import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './users.routes';
const router = Router();

router
	.get('/', (req, res) => {
		res.json({ status: 'ok' });
	})
	.use('', authRoutes)
	.use('/users', userRoutes);

export default router;
