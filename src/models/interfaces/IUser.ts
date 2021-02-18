import { Document } from 'mongoose';

/**
 * User Interface
 */
interface IUser extends Document {
	_id?: string;
	name: string;
	email: string;
	phone?: string;
	password?: string;
	birthdayDate?: Date;
	createdAt: Date;
	updatedAt: Date;

	// Methods
	comparePassword(password: string): boolean;
}

// Not use export default to turn easy auto import
export { IUser };
