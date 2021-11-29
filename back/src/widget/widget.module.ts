import { Module } from '@nestjs/common';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Widget } from './models/widget.model';
import { UserModule } from 'src/user/user.module';
import { Parameter } from './models/parameter.model';
import { ConfigModule } from '@nestjs/config';
import { WidgetsController } from './widgets.controller';

@Module({
  imports: [UserModule, SequelizeModule.forFeature([Widget, Parameter]), ConfigModule],
  controllers: [WidgetController, WidgetsController],
  providers: [WidgetService],
  exports: [SequelizeModule, WidgetService],
})
export class WidgetModule {}

