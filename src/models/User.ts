import { env } from '@configs/environment';
import logging from '@configs/logging';
import { IUser } from '@models/interfaces/IUser';
import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';

const salt = bcrypt.genSaltSync(env.jwt.salt);

/**
 * User Schema
 */
const UserSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'User name is required'],
		},
		email: {
			type: String,
			validate: {
				validator: function (data: string) {
					return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data);
				},
				message: (props) => `${props.value} is not a valid email!`,
			},
			required: [true, 'User email is required'],
			unique: [true, 'This email already exists'],
		},
		phone: {
			type: String,
			validate: {
				validator: function (data: string) {
					return /^\d{9}$/.test(data);
				},
				message: (props) =>
					`${props.value} is not a valid phone number`,
			},
		},
		password: {
			type: String,
			minlength: 6,
			required: [true, 'User password is required'],
			unique: true,
		},
		birthdayDate: {
			type: Date,
		},
	},
	{ timestamps: true }
);

/**
 * Pre Actions
 */
UserSchema.pre(/^(save)$/, async function (next) {
	// only hash the password if it has been modified (or is new)
	if (!this.isModified('password')) {
		return next();
	}

	const hash = await bcrypt.hash(this.get('password'), salt);
	this.set('password', hash);

	next();
});

UserSchema.pre(/^(updateOne|update|findOneAndUpdate)$/, async function (next) {
	if (this.isModified('password')) {
		logging.debug(`AFTER ${this.get('password')}`);

		const newHash = await bcrypt.hash(this.get('password'), salt);
		this.set('password', newHash);

		logging.debug(`BEFORE ${this.get('password')}`);
	}

	next();
});

/**
 * TODO: POPULATE Role
 * .pre(/^(find|findOne|findOneAndUpdate)$/, function (next) {
 *		this.populate('role');
 *		next();
 *	})
 */

/**
 * Custom Methods
 */
UserSchema.methods.comparePassword = function (password, callback) {
	return bcrypt.compare(password, this.get('password'), callback);
};

export default mongoose.model<IUser>('User', UserSchema);
