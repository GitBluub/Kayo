import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Parameter } from 'src/widget/models/parameter.model';

@Injectable()
export class StocksService {
	axiosInstance: AxiosInstance
	apiKey: string
	constructor(
		private configService: ConfigService
	) {
		this.apiKey = this.configService.get("STOCKS_API_KEY")
		this.axiosInstance = axios.create({
			baseURL: "https://www.alphavantage.co/query",
		});
	}

	async getData(widgetName: string, params: Parameter[], token: string) {
		const symbol = params[0].value;
		const res = await this.axiosInstance.get(`?function=TIME_SERIES_INTRADAY&\
		symbol=${params[0].value}&interval=5min&apikey=${this.apiKey}`)
		const quotes = res.data["Time Series (5min)"]
		const keys = quotes.keys();
		return {
			symbol,
			total: quotes[keys[0]]['2, high'],
			open: quotes[keys.slice(-1)]['2, high']
		}
	}
}
