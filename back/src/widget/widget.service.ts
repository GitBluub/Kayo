import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from "@nestjs/sequelize"
import { use } from 'passport';
import { Widget } from './models/widget.model';

interface widgetParams
{
	name: string;
	value: string;	
}

@Injectable()
export class WidgetService {
	constructor(
		@InjectModel(Widget)
		private widgetModel: typeof Widget,
		private configService: ConfigService
	) {}

	async createWidget(serviceName: string, widgetName: string, widgetData: widgetParams[], userId: number): Promise<Widget> {
		return this.widgetModel.create(
			{
				serviceName: serviceName,
				name: widgetName,
				parameters: widgetData,
				userId: userId,
			}
		);
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
		console.log(userId);
		
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

	async updateWidget(widgetId: number, widgetData: widgetParams[], userId: number): Promise<[number, Widget[]]> {
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