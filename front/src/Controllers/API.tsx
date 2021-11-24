import axios from "axios";

enum APICallMethod {
	POST = "post",
	GET = "get",
	DELETE ="delete",
	PUT = "put"
}

export default class API {
	private static host = import.meta.env.SNOWPACK_PUBLIC_BACK_END_HOST
	private static port = import.meta.env.SNOWPACK_PUBLIC_BACK_END_PORT
	public static jwtToken = null

	private static _call(route: string, method: APICallMethod, parameters: any) {

		return axios({
			method: method,
			url: `http://${this.host}:${this.port}${route}`,
			data: parameters
		  }).then(res => res.data);
	}

	public static register(username: string, passowrd: string) {
		return this._call('/auth/register', APICallMethod.POST, {
			name: username,
			password: passowrd
		});
	}

	public static login(username: string, passowrd: string) {
		return this._call('/auth/login', APICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}

	public static getAbout() {
		return this._call('/about.json', APICallMethod.GET, {});
	}
	
	public static getSubscribedServices() {
		return Promise.resolve(['weather', 'covid', 'stocks'])
		//return this._call('/services/subscribed', APICallMethod.GET);
	}

	public static getOtherServices() {
		//return this._call('/services/unsubscribed', APICallMethod.GET);
		return Promise.resolve(['spotify'])
	}

	public static unsubscribe(serviceName: string) {
		return this._call(`/service/${serviceName}`, APICallMethod.DELETE, {});
	}

	public static subscribe(serviceName: string) {
		return this._call(`/service/${serviceName}`, APICallMethod.POST, {});
	}

	public static getAvailableServices() {
		//return this.getAbout().then((about: any) => {
		//	var serviceNames: string[] = [];
		//	about.server.services.forEach((element: any) => serviceNames.push(element.name))
		//	return serviceNames;
		//})
		return Promise.resolve(['weather', 'covid', 'stocks', 'spotify'])
	}
}