import axios from "axios";

export default class WeatherAPI {
	private static apiKey = import.meta.env.SNOWPACK_PUBLIC_WEATHER_API_KEY;
	private static weatherAPIUrl = 'http://api.weatherapi.com/v1/current.json'


	public static _call(cityName: string) {
		return axios.get(
			`${this.weatherAPIUrl}&key=${this.apiKey}&q${cityName}&aqi=no`
		).then(res => res.data);
	}

	public static getCityWeather(cityName: string) {
		return this._call(cityName).then(res => res.current.condition);
	}

	public static getCityHumidity(cityName: string) {
		return this._call(cityName).then(res => res.current.humidity);
	}

	public static getCityTemperature(cityName: string) {
		return this._call(cityName).then(res => res.current.temp_c);
	}
}