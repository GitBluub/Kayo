import { BadRequestException, forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from "@nestjs/sequelize"
import { use } from 'passport'
import { Widget } from './models/widget.model';
import { Parameter } from './models/parameter.model';
import { ParamInterface } from './models/parameter.model';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { StocksService } from 'src/stocks/stocks.service';
import { SpotifyService } from 'src/spotify/spotify.service';
import { WeatherService } from 'src/weather/weather.service';
import { GithubService } from 'src/github/github.service';


@Injectable()
export class WidgetService {
	constructor(
		@InjectModel(Widget)
		private widgetModel: typeof Widget,
		@InjectModel(Parameter)
		private parameterModel: typeof Parameter,
		private configService: ConfigService,
		@Inject(forwardRef(() => SubscriptionService))
		private subscriptionService: SubscriptionService,

		private stocksService: StocksService,
		private spotifyService: SpotifyService,
		private weatherService: WeatherService,
		private githubService: GithubService
	) {}

	async createWidget(serviceName: string, widgetName: string, widgetData: ParamInterface[], userId: number): Promise<Widget> {
		const maxIndex = await this.widgetModel.max('index') as number;
		const services = this.configService.get('services').services;
		const widget = await this.widgetModel.create(
			{
				serviceName: serviceName,
				name: widgetName,
				userId: userId,
				index: maxIndex + 1
			}
		);
		const service = services.find(service => service.name === serviceName);
		const widgetConf = service.widgets.find(widget => widget.name === widgetName);
		widgetData.forEach(data => {
			const type = widgetConf.params.find(parameter => parameter.name === data.name).type;
			this.parameterModel.create({
				widgetId: widget.id,
				name: data.name,
				value: data.value,
				type
			});
		})
		return widget;
	}

	async deleteWidget(widgetId: number, userId: number): Promise<number> {
		return this.widgetModel.destroy({
			where: {
				id: widgetId,
				userId: userId
			}
		});
	}

	async deleteServiceRelatedWidgets(serviceName: string, userId: number) {
		return this.widgetModel.destroy({
			where: {
				serviceName,
				userId
			}
		})
	}

	async getWidgets(userId: number): Promise<Widget[]> {
		const services = this.configService.get('services').services;
		const userWidgets = await this.widgetModel.findAll({
			where: {
				userId
			},
			order: [
				['index', 'ASC']
			]
		});	
		const userWidgetsParams = await this.parameterModel.findAll({
			where: {
				widgetId: userWidgets.map(widget => widget.id)
			}
		})
		return userWidgets.map(widget => {
			const widgetService = services.find(service => service.name === widget.serviceName)
			const widgetConf = widgetService.widgets.find(widgetElem => widgetElem.name === widget.name)
			const finalWidget = 
			{
				...widgetConf,
				id: widget.id,
				serviceName: widget.serviceName,
				index: widget.index,
				params: widgetConf.params.map(param => {
					const currParam = userWidgetsParams.find(widgetParam => {
						return widgetParam.name === param.name &&
						widgetConf.name === userWidgets.find(p => p.id === widget.id).name &&
						widget.id === widgetParam.widgetId
					})
					return {...param, value: currParam.value}
				})
			}
			return finalWidget
		});
	}

	async getAvailableWidgets(userId: number) {
		const subscribed = await this.subscriptionService.getSubscribed(userId);
		const services = this.configService.get('services').services.filter(service => subscribed.includes(service.name))
		return services.map(service => {
			return {
				serviceName: service.name,
				widgets: service.widgets
			}});
	}

	async updateWidget(widgetId: number, widgetData: ParamInterface[], userId: number) {
		for (let param of widgetData) {
			await this.parameterModel.update({
				value: param.value
			}, {
				where: {
					name: param.name,
					widgetId
				}
			});
		}
	}

	async getWidgetData(id: number, userId: number) {
		const widget = await this.widgetModel.findOne({
			where: {
				id
			}
		})
		const parameters = await this.parameterModel.findAll({
			where: {
				widgetId: widget.id
			}
		});
		const subscription = await this.subscriptionService.find(userId, widget.serviceName);
		switch (widget.serviceName) {
			case "spotify":
				const res = await this.spotifyService.getData(widget.name, parameters, subscription.token, subscription.refreshToken);
				subscription.update({
					token: res.accessToken,
				})
				delete res.accessToken;
				return res;
			case "weather":
				return this.weatherService.getData(widget.name, parameters, subscription.token)
			case "stocks":
				return this.stocksService.getData(widget.name, parameters, subscription.token)
			case "github":
				return this.githubService.getData(widget.name, parameters, subscription.token)
			default:
				throw BadRequestException
		}
	}

	async reorderWidgets(userId: number, ids: number[]) {
		ids.forEach(async (id, newIndex, array) => {
			await this.widgetModel.update({
				index: newIndex
			}, {
				where: {
					id
				}
			});
		})
	}
}