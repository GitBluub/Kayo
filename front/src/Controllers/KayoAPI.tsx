import axios from "axios";
import type { WidgetGroupInterface } from "src/Views/Components/Widget";
import type { WidgetParam } from "../Models/Widget";

enum KayoAPICallMethod {
	POST = "post",
	GET = "get",
	DELETE ="delete",
	PUT = "put"
}

/**
 * Kayo API wrapper
 */
export default class KayoAPI {
	private static host = import.meta.env.SNOWPACK_PUBLIC_BACK_END_HOST
	private static port = import.meta.env.SNOWPACK_PUBLIC_BACK_END_PORT
	public static jwtToken = null

	private static _call(route: string, method: KayoAPICallMethod, parameters: Object) {

		return axios({
			method: method,
			url: `http://${this.host}:${this.port}${route}`,
			data: parameters
		  }).then(res => res.data);
	}

	/**
	 * Register user in DB
	 * @param username 
	 * @param passowrd 
	 * @returns 
	 */
	public static register(username: string, passowrd: string) {
		return this._call('/auth/register', KayoAPICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}

	/**
	 * get JWT for future api calls
	 * @param username 
	 * @param passowrd 
	 * @returns 
	 */
	public static login(username: string, passowrd: string) {
		return this._call('/auth/login', KayoAPICallMethod.POST, {
			username: username,
			password: passowrd
		});
	}
	
	/**
	 * Get a list of subscribed services
	 * @returns 
	 */
	public static getSubscribedServices() {
		//return Promise.resolve(['weather', 'covid', 'stocks'])
		return this._call('/service/subscribed', KayoAPICallMethod.GET, {});
	}

	/**
	 * Get list of other services, the user is not subscribed to
	 * @returns 
	 */
	public static getOtherServices() {
		return this._call('/service/available', KayoAPICallMethod.GET, {});
		//return Promise.resolve(['spotify'])
	}

	/**
	 * Unsubscribe to a service, based on its name
	 * @param serviceName 
	 * @returns 
	 */
	public static unsubscribe(serviceName: string) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.DELETE, {});
	}

	/**
	 * Subscribe to a service, based on its name
	 * @param serviceName 
	 * @param token 
	 * @param refreshToken 
	 * @returns 
	 */
	public static subscribe(serviceName: string, token: string, refreshToken: string | null) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.POST, {
			serviceToken: token,
			refreshToken
		});
	}

	/**
	 * Get user's widgets
	 * @returns 
	 */
	public static getMyWidgets() {
		return this._call("/widgets", KayoAPICallMethod.GET, {});
	}

	/**
	 * Get widget the user can add
	 * @returns 
	 */
	public static getAvailableWidgets() {
		return this._call("/widget/available", KayoAPICallMethod.GET, {});
	}

	/**
	 * Remove a user's widget
	 * @param widgetId 
	 * @returns 
	 */
	public static deleteWidget(widgetId: number) {
		return this._call(`/widget/${widgetId}`, KayoAPICallMethod.DELETE, {});
	}

	/**
	 * Update a widget's configuration
	 * @param widgetId 
	 * @param params 
	 * @returns 
	 */
	public static updateWidgetParams(widgetId: number, params: WidgetParam[]) {
		return this._call(`/widget/${widgetId}`, KayoAPICallMethod.PUT, { params: params})
	}

	/**
	 * Add a widget
	 * @param serviceName 
	 * @param widgetName 
	 * @param params 
	 * @returns 
	 */
	public static addWidget(serviceName: string, widgetName: string, params: WidgetParam[]) {
		return this._call(`/${serviceName}/${widgetName}`, KayoAPICallMethod.POST, { params: params})
	}

	public static getOAuthToken(serviceName: string) {
		return this._call(`/service/${serviceName}`, KayoAPICallMethod.GET, {}).then(res => res.serviceToken);
	}

	/**
	 * Get a widget's complete information
	 * @param widgetId 
	 * @returns 
	 */
	public static getWidgetData(widgetId: number) {
		return this._call(`/widget/${widgetId}`,  KayoAPICallMethod.GET, {});
	}

	/**
	 * Reorder widgets
	 * @param ids 
	 * @returns 
	 */
	public static reorderWidgetsData(ids: number[]) {
		return this._call(`/widgets/reorder`,  KayoAPICallMethod.PUT, { ids });
	}

	/**
	 * Get list of users
	 * @returns 
	 */
	public static getUsers() {
		return this._call('/users', KayoAPICallMethod.GET, {})
	}

	/**
	 * Delete user
	 * @param id 
	 * @returns 
	 */
	public static deleteUser(id: number) {
		return this._call(`/user/${id}`, KayoAPICallMethod.DELETE, {})
	}
}