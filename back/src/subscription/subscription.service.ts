import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './models/subscription.model';
import { SubscriptionDto } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {
	constructor(
		@InjectModel(Subscription)
		private subscriptionModel: typeof Subscription,
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

	async delete(subscriptionId: number): Promise<number> {
		return this.subscriptionModel.destroy({
			where: {
				id: subscriptionId
			}
		});
	}
}
