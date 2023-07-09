export class TokenEntity {
	private _access_token: String;
	private _refresh_token: IRefresh;

	constructor(token: IToken) {
		this.access_token = token.access_token;
		this.refresh_token = token.refresh_token;
	}

	public get refresh_token(): IRefresh {
		return this._refresh_token;
	}

	public set refresh_token(value: IRefresh) {
		this._refresh_token = value;
	}

	public get access_token(): String {
		return this._access_token;
	}

	public set access_token(value: String) {
		this._access_token = value;
	}
}

export class Refresh {
	private id: number;
	private token: String;
	private expires_in: String;
	private timestamp: String;
	private user_id: number;

	constructor(token: IRefresh) {
		this.id = token.id;
		this.token = token.token;
		this.expires_in = token.expires_in;
		this.timestamp = token.timestamp;
		this.user_id = token.user_id;
	}
}

export interface IRefresh {
	id: number;
	token: String;
	expires_in: String;
	timestamp: String;
	user_id: number;
}

export interface IToken {
	access_token: String;
	refresh_token: IRefresh;
}
