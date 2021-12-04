import { Body, Controller, Get, Delete, Param, Post, Put, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateWidgetDto } from './dto/createWidget.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse({description: 'Unauthorized'})
export class WidgetController {
	constructor (private widgetService: WidgetService) {}

	@Post("/:serviceName/:widgetName")
	@ApiCreatedResponse({description: 'Widget has been created'})
	async createWidget(@Param("serviceName") serviceName: string, @Param("widgetName") widgetName: string, @Request() req,
	@Body(new ValidationPipe({transform: true})) createWidgetDto: CreateWidgetDto) {
		return await this.widgetService.createWidget(serviceName, widgetName, createWidgetDto.params, req.user.id);
	}
	
	@Get("/widget/available")
	async getAvailableWidgets(@Request() req) {
		return this.widgetService.getAvailableWidgets(req.user.id);
	}

	@Get("/widget/:id")
	@ApiOkResponse({ description: "Returns the data of the widget requested"})
	async getWidget(@Param("id") id: number, @Request() req) {
		return this.widgetService.getWidgetData(id, req.user.id);
	}

	@Delete("/widget/:id")
	async deleteWidget(@Param("id") id: number, @Request() req) {
		return await this.widgetService.deleteWidget(id, req.user.id);
	}

	@Put("/widget/:id")
	async updateWidget(@Param("id") id: number, @Request() req, @Body() createWidgetDto: CreateWidgetDto) {
		return await this.widgetService.updateWidget(id, createWidgetDto.params, req.user.id);
	}

	@Get("/widgets")
	async getWidgets(@Request() req) {
		return this.widgetService.getWidgets(req.user.id);
	}
}
