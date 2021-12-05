import { Body, Controller, Get, Delete, Param, Post, Put, Request, UseGuards, ValidationPipe, BadRequestException } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateWidgetDto } from './dto/createWidget.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ReorderWidgetsDto } from './dto/reorderWidgets.dto';

@Controller()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiUnauthorizedResponse({description: 'Unauthorized'})
@ApiBadRequestResponse({description: 'Error with database'})
export class WidgetController {
	constructor (private widgetService: WidgetService) {}

	@Post("/:serviceName/:widgetName")
	@ApiOkResponse({description: 'Widget has been created'})
	async createWidget(@Param("serviceName") serviceName: string, @Param("widgetName") widgetName: string, @Request() req,
	@Body(new ValidationPipe({transform: true})) createWidgetDto: CreateWidgetDto) {
		try {
			return await this.widgetService.createWidget(serviceName, widgetName, createWidgetDto.params, req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}
	
	@Get("/widget/available")
	async getAvailableWidgets(@Request() req) {
		try {
			return this.widgetService.getAvailableWidgets(req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Get("/widget/:id")
	@ApiOkResponse({ description: "Returns the data of the widget requested"})
	async getWidget(@Param("id") id: number, @Request() req) {
		try {
			return this.widgetService.getWidgetData(id, req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Delete("/widget/:id")
	async deleteWidget(@Param("id") id: number, @Request() req) {
		try {
			return await this.widgetService.deleteWidget(id, req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Put("/widget/:id")
	async updateWidget(@Param("id") id: number, @Request() req, @Body() createWidgetDto: CreateWidgetDto) {
		try {
			return await this.widgetService.updateWidget(id, createWidgetDto.params, req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Get("/widgets")
	async getWidgets(@Request() req) {
		try {
			return await this.widgetService.getWidgets(req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Put("/widgets/reorder")
	async reorderWidgets(@Request() req, @Body() reorderWidgetsDto: ReorderWidgetsDto) {
		try {
			return this.widgetService.reorderWidgets(req.user.userId, reorderWidgetsDto.ids);
		} catch {
			throw new BadRequestException();
		}
	}
}
