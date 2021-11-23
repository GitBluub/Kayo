import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionService {
	constructor(
		@InjectModel(Subscription)
		private subscriptionModel: typeof Subscription,
	) {}

	//async create(subscriptionDto: SubscriptionDto): Promise<Subscription> {
	//	return this.subscriptionModel.create(subscription);
	//}
}
