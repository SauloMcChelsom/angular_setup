export class RouteEntity {
	private _route: String;

	constructor() {}

	public get route(): String {
		return this._route;
	}

	public set route(value: String) {
		this._route = value;
	}
}

export interface IRoute {
	route: String;
}
