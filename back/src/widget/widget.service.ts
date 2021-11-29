import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from "@nestjs/sequelize"
import { use } from 'passport'
import { Widget } from './models/widget.model';
import { Parameter } from './models/parameter.model';
import { ParamInterface } from './models/parameter.model';


@Injectable()
export class WidgetService {
	constructor(
		@InjectModel(Widget)
		private widgetModel: typeof Widget,
		@InjectModel(Parameter)
		private parameterModel: typeof Parameter,
		private configService: ConfigService
	) {}

	async createWidget(serviceName: string, widgetName: string, widgetData: ParamInterface[], userId: number): Promise<Widget> {
		
		const services = this.configService.get('services').services;
		const widget = await this.widgetModel.create(
			{
				serviceName: serviceName,
				name: widgetName,
				userId: userId,
			}
		);
		const service = services.find(service => service.name === serviceName);
		console.log(widgetName);
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

	async getWidgets(userId: number): Promise<Widget[]> {
		const services = this.configService.get('services').services;
		const userWidgets = await this.widgetModel.findAll({
			where: {
				userId: userId
			}
		});

		const widgets = services.map(service => {
			return {
				serviceName: service.name,
				widgets: userWidgets.filter(widget => widget.serviceName === service.name)
			}});
		return widgets;
	}

	async updateWidget(widgetId: number, widgetData: ParamInterface[], userId: number): Promise<[number, Widget[]]> {
		return this.widgetModel.update({
			parameters: widgetData
		}, {
			where: {
				id: widgetId,
				userId: userId
			}
		});
	}
}