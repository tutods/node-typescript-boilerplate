class HttpException extends Error {
	code: number;
	message: string;

	constructor(code: number, message: string) {
		super(message);
		this.code = code;
		this.message = message;
	}
}

export { HttpException };
