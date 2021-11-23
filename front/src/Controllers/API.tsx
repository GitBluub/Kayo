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

	private static _call(uri: string, method: APICallMethod, parameters: any) {
		const jwtToken = useSelector((state: any) => state.jwtToken);

		return fetch(`https://${this.host}:${this.port}${uri}`, {
			method: method,
			body: parameters,
			headers: {
				'content-type': 'application/json',
				authorization: jwtToken ? `Bearer ${jwtToken}` : ""
			  },
		}).then(res => res.json);
	}
}