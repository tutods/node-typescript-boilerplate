import dotenv from 'dotenv';
dotenv.config();

const SERVER = { port: process.env.PORT || 3000 };

const MONGO_OPTIONS = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	socketTimeoutMS: 30000,
	keepAlive: true,
	poolSize: 50,
	autoIndex: false,
	retryWrites: false,
};

const MONGO = {
	host: process.env.MONGO_HOST || 'localhost',
	database: process.env.MONGO_DB || 'gym_db',
	port: process.env.MONGO_PORT || '27017',
	options: MONGO_OPTIONS,
	url: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};

const JWT = {
	salt: Number(process.env.SALT) || 10,
	secret: process.env.SECRET || 'jwt_gym_21?secret',
	expire: Number(process.env.EXPIRES) || 180000, //in ms
};

export const env = {
	mongo: MONGO,
	server: SERVER,
	jwt: JWT,
};
