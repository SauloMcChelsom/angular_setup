export class IHttpResponse {
	private statusCode: number = 0;
	private code: String = '';
	private message: String = '';
	private description: String = '';
	private timestamp: String = '';
	private results: Array<any> = [];

	constructor(private object: IHttpResponsed) {
		this.statusCode = object.statusCode;
		this.code = object.code;
		this.message = object.message;
		this.description = object.description;
		this.timestamp = object.timestamp;
		this.results = object.results;
	}

	public setStatusCode(value: number): void {
		this.statusCode = value;
	}

	public setCode(value: String): void {
		this.code = value;
	}

	public setMessage(value: String): void {
		this.message = value;
	}

	public setDescription(value: String): void {
		this.description = value;
	}

	public setTimestamp(): void {
		this.timestamp = new Date().toString();
	}

	public setResults(value: any) {
		this.results = [];
		this.results = value;
	}

	public getStatusCode(): number {
		return this.statusCode;
	}

	public getCode(): String {
		return this.code;
	}

	public getMessage(): String {
		return this.message;
	}

	public getDescription(): String {
		return this.description;
	}

	public getTimestamp(): String {
		return this.timestamp;
	}

	public getResults(): any[] {
		return this.results;
	}
}

export interface IHttpResponsed {
	statusCode: number;
	code: String;
	message: String;
	description: String;
	timestamp: String;
	results: Array<any>;
}
