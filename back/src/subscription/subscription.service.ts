import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './models/subscription.model';
import { SubscriptionDto } from './dto/subscription.dto';
import { ConfigService } from '@nestjs/config';
import { WidgetService } from 'src/widget/widget.service';

@Injectable()
export class SubscriptionService {
	constructor(
		@InjectModel(Subscription)
		private subscriptionModel: typeof Subscription,
		private configService: ConfigService,
		private widgetService: WidgetService
	) {}

	async create(subscriptionDto: SubscriptionDto, serviceName: string, userId: number): Promise<Subscription> {
		return this.subscriptionModel.create(
			{
				name: serviceName,
				token: subscriptionDto.serviceToken,
				userId: userId
			}
		);
	}

	async delete(serviceName: string, userId: number): Promise<number> {
		await this.widgetService.deleteServiceRelatedWidgets(serviceName, userId);
		return this.subscriptionModel.destroy({
			where: {
				name: serviceName,
				userId: userId,
			}
		});
	}

	async getAvailable(userId: number) {
		const subscriptions = await this.subscriptionModel.findAll({
			where: {
				userId: userId
			}
		});
		const namesSubscribed = subscriptions.map(subscription => subscription.name);
		const serviceNames = this.configService.get('services').services.map(service => service.name);
		return serviceNames.filter(serviceName => !namesSubscribed.includes(serviceName));
	}

	async getSubscribed(userId: number) {
		const subscriptions = await this.subscriptionModel.findAll({
			where: {
				userId: userId
			}
		});
		return subscriptions.map(subscription => subscription.name);
	}
}
