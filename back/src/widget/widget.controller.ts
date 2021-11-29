import { Body, Controller, Get, Delete, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { IsNotEmpty } from "class-validator";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


interface Param {
	name: string,
	value: string
}
class CreateWidgetDto {

	@IsNotEmpty()
	params: Param[];
}


@Controller()
@UseGuards(JwtAuthGuard)
export class WidgetController {
	constructor (private widgetService: WidgetService) {}

	@Post("/:serviceName/:widgetName")
	async createWidget(@Param("serviceName") serviceName: string, @Param("widgetName") widgetName: string, @Request() req, @Body() createWidgetDto: CreateWidgetDto) {
		return await this.widgetService.createWidget(serviceName, widgetName, createWidgetDto.params, req.user.userId);
	}

	@Delete("/widget/:id")
	async deleteWidget(@Param("id") id: number, @Request() req) {
		return await this.widgetService.deleteWidget(id, req.user.userId);
	}

	@Put("/widget/:id")
	async updateWidget(@Param("id") id: number, @Request() req, @Body() createWidgetDto: CreateWidgetDto) {
		return await this.widgetService.updateWidget(id, createWidgetDto.params, req.user.userId);
	}

	@Get("/widgets")
	async getWidgets(@Request() req) {
		return this.widgetService.getWidgets(req.user.userId);
	}
}
