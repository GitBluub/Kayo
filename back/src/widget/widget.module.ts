import { Module } from '@nestjs/common';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Widget } from './models/widget.model';

@Module({
  imports: [SequelizeModule.forFeature([Widget])],
  controllers: [WidgetController],
  providers: [WidgetService],
  exports: [SequelizeModule, WidgetService],
})
export class WidgetModule {}
