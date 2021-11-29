import axios from "axios";

export default class StockMarketAPI {
	private static apiKey = import.meta.env.SNOWPACK_PUBLIC_STOCK_API_KEY
	private static apiUrl = 'https://www.alphavantage.co/query'


	public static getSummary(symbol:string ) {
		return axios.get(
			`${this.apiUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`
		).then(res => res.data)
	}

}