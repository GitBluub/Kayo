import { Controller, Get, Request } from '@nestjs/common';
import { WidgetService } from './widget.service';

@Controller('widgets')
export class WidgetsController {
	constructor (private widgetService: WidgetService) {}

	@Get()
	async getWidgets(@Request() req) {
		return this.widgetService.getWidgets(req.user.id);
	}
}
