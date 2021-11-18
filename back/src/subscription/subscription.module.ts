import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscription } from 'rxjs';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [SequelizeModule.forFeature([Subscription])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SequelizeModule, SubscriptionService],
})
export class SubscriptionModule {}
