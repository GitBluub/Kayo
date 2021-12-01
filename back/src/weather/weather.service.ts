import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Parameter } from 'src/widget/models/parameter.model';

@Injectable()
export class WeatherService {

	axiosInstance: AxiosInstance
	apiKey: string
	constructor (
		private configService: ConfigService
	) {
		this.apiKey = this.configService.get("WEATHER_API_KEY")
		this.axiosInstance = axios.create({
			baseURL: "http://api.weatherapi.com/v1/current.json",
		});
	}

	async apiCall(params: Parameter[]) {
		return this.axiosInstance.get(`?key=${this.apiKey}&q=${params[0].value}&aqi=no`)
	}

	async getData(widgetName: string, params: Parameter[], token: string) {
		const res = await this.apiCall(params);
		const result = {
			city: params[0].value
		}
		const current = res.data.current
		switch(widgetName) {
			case "temperature":
				return {
					...result,
					temperature: current.temp_c
				}
			case "weather":
				return {
					...result,
					condition: current.condition,
					illustrationURL: "https:" + current.condition.icon
				}
			case "humidity":
				return {
					...result,
					humidity: current.humidity
				}
			default:
				throw HttpException
		}
	}
}
