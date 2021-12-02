import axios from "axios";
import type { WidgetGroupInterface } from "src/Views/Components/Widget";
import type { WidgetParam } from "../Models/Widget";

enum KayoAPICallMethod {
	POST = "post",
	GET = "get",
	DELETE ="delete",
	PUT = "put"
}

export default class KayoAPI {
	private static host = import.meta.env.SNOWPACK_PUBLIC_BACK_END_HOST
	private static port = import.meta.env.SNOWPACK_PUBLIC_BACK_END_PORT
	public static jwtToken = null

	private static _call(route: string, method: KayoAPICallMethod, parameters: any) {

		return axios({
			method: method,
			url: `http://${this.host}:${this.port}${route}`,
			data: parameters
		  }).then(res => res.data);
	}

	public static register(username: string, passowrd: string) {
		return this._call('/auth/register', KayoAPICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}

	public static login(username: string, passowrd: string) {
		return this._call('/auth/login', KayoAPICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}
	
	public static getSubscribedServices() {
		//return Promise.resolve(['weather', 'covid', 'stocks'])
		return this._call('/service/subscribed', KayoAPICallMethod.GET, {});
	}

	public static getOtherServices() {
		return this._call('/service/available', KayoAPICallMethod.GET, {});
		//return Promise.resolve(['spotify'])
	}

	public static unsubscribe(serviceName: string) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.DELETE, {});
	}

	public static subscribe(serviceName: string, token: string) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.POST, {
			serviceToken: token
		});
	}

	public static getMyWidgets() {
		return this._call("/widgets", KayoAPICallMethod.GET, {});
	}

	public static getAvailableWidgets() {
		return this._call("/widget/available", KayoAPICallMethod.GET, {});
	}

	public static deleteWidget(widgetId: number) {
		return this._call(`/widget/${widgetId}`, KayoAPICallMethod.DELETE, {});
	}

	public static updateWidgetParams(widgetId: number, params: WidgetParam[]) {
		return this._call(`/widget/${widgetId}`, KayoAPICallMethod.PUT, { params: params})
	}

	public static addWidget(serviceName: string, widgetName: string, params: WidgetParam[]) {
		return this._call(`/${serviceName}/${widgetName}`, KayoAPICallMethod.POST, { params: params})
	}

	public static getOAuthToken(serviceName: string) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.GET, {}).then(res => res.serviceToken);
	}

	public static getWidgetData(widgetId: number) {
		return this._call(`/widget/${widgetId}`,  KayoAPICallMethod.GET, {});
	}
}