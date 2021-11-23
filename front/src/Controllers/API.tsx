import { useSelector } from "react-redux";

enum APICallMethod {
	POST = "POST",
	GET = "GET",
	DELETE ="DELETE",
	PUT = "PUT"
}

export default class API {
	private static host = import.meta.env.SNOWPACK_PUBLIC_BACK_END_HOST
	private static port = import.meta.env.SNOWPACK_PUBLIC_BACK_END_PORT
	public static jwtToken = null

	private static _call(uri: string, method: APICallMethod, parameters: any) {

		return fetch(`http://${this.host}:${this.port}${uri}`, {
			method: method,
			body: parameters,
			headers: {
				'content-type': 'application/json',
				authorization: this.jwtToken ? `Bearer ${this.jwtToken}` : ""
			  },
		}).then(res => res.json);
	}

	public static register(username: string, passowrd: string) {
		return this._call('/auth/register', APICallMethod.POST,{
			username: username,
			passowrd: passowrd
		});
	}

	public static login(username: string, passowrd: string) {
		return this._call('/auth/login', APICallMethod.POST, {
			username: username,
			passowrd: passowrd
		});
	}
}