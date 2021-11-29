import { Body, Controller, Delete, Param, Post, Request } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { IsNotEmpty } from "class-validator";


interface Param {
	name: string,
	value: string
}
class CreateWidgetDto {
	@IsNotEmpty()
	serviceName: string;

	@IsNotEmpty()
	params: Param[];
}


@Controller('widget')
export class WidgetController {
	constructor (private widgetService: WidgetService) {}

	@Post("/:widgetName")
	async createWidget(@Param("widgetName") widgetName: string, @Request() req, @Body() createWidgetDto: CreateWidgetDto) {
		return await this.widgetService.createWidget(createWidgetDto.serviceName, widgetName, createWidgetDto.params, req.user.userId);
	}

	@Delete("/:id")
	async deleteWidget(@Param("id") id: number, @Request() req) {
		return await this.widgetService.deleteWidget(id, req.user.userId);
	}
}
