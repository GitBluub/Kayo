import axios from "axios";
import type { WidgetParam } from "src/Components/Widget";

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
			username: username,
			password: passowrd
		});
	}

	public static login(username: string, passowrd: string) {
		return this._call('/auth/login', APICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}
	
	public static getSubscribedServices() {
		return Promise.resolve(['weather', 'covid', 'stocks'])
		//return this._call('/services/subscribed', APICallMethod.GET);
	}

	public static getOtherServices() {
		//return this._call('/services/available', APICallMethod.GET);
		return Promise.resolve(['spotify'])
	}

	public static unsubscribe(serviceName: string) {
		return this._call(`/service/${serviceName}`, APICallMethod.DELETE, {});
	}

	public static subscribe(serviceName: string, token: string) {
		return this._call(`/service/${serviceName}`, APICallMethod.POST, {
			serviceToken: token
		});
	}

	public static getMyWidgets() {
		//return this._call("/widgets", APICallMethod.GET, {});
		return Promise.resolve([
			{
				"name": "spotify",
				"widgets": [
					{
						"id": 1,
						"name": "widget1",
						"desc": "blabla",
						"params": [
							{
								"name": "param1",
								"value": "string"
							},
						]
					}
				]
			}
		])
	}

	public static getAvailableWidgets() {
		//return this._call("/services/widgets", APICallMethod.GET, {});
		return Promise.resolve([
			{
				"name": "spotify",
				"widgets": [
					{
						"name": "widget1",
						"desc": "blabla",
						"params": [
							{
								"name": "param1",
								"type": "string"
							},
						]
					}
				]
			}
		])
	}

	public static deleteWidget(widgetId: number) {
		return this._call(`/widgets/${widgetId}`, APICallMethod.DELETE, {});
	}

	public static updateWidgetParams(widgetId: number, params: WidgetParam[]) {
		return this._call(`/widget/${widgetId}`, APICallMethod.PUT, { params: params})
	}

	public static addWidget(serviceName: string, widgetName: string, params: WidgetParam[]) {
		return this._call(`/service/${serviceName}/${widgetName}`, APICallMethod.POST, { params: params})
	}
}