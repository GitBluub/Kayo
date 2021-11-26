import { Module } from '@nestjs/common';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Widget } from './models/widget.model';
import { User } from "../user/models/user.model";
import { UserModule } from 'src/user/user.module';
import { Parameter } from './models/parameter.model';

@Module({
  imports: [UserModule, SequelizeModule.forFeature([Widget, Parameter])],
  controllers: [WidgetController],
  providers: [WidgetService],
  exports: [SequelizeModule, WidgetService],
})
export class WidgetModule {}

