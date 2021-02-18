const info = (message: string): void => {
	console.log('\x1b[34m', `[${getTimeStamp()}] [INFO] ${message}`);
};

const warn = (message: string): void => {
	console.log('\x1b[33m', `[${getTimeStamp()}] [WARN] ${message}`);
};

const error = (message: string): void => {
	console.log('\x1b[31m', `[${getTimeStamp()}] [ERROR] ${message}`);
};

const debug = (message: string): void => {
	console.log('\x1b[35m', `[${getTimeStamp()}] [DEBUG] ${message}`);
};

const getTimeStamp = (): string => {
	const date = new Date();

	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);

	const dateString = `${day}/${month}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return dateString;
};

export default {
	info,
	warn,
	error,
	debug,
};
