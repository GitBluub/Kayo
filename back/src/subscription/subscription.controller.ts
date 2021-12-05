import { Controller, Param, Post, Body, UseGuards, Request, Get, Delete, BadRequestException, Res } from '@nestjs/common';
import { SubscriptionDto } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Response } from "express"
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('service')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiUnauthorizedResponse({description: 'Unauthorized'})
@ApiBadRequestResponse({description: 'Error with database'})
export class SubscriptionController {
	constructor (private subscriptionService: SubscriptionService) {}

	@Post('/:name')
	@ApiCreatedResponse({ description: "The subscription has been created succesfully"})
	async create(@Body() body: SubscriptionDto, @Param('name') name: string, @Request() req, @Res() res: Response) {
		try {
			const created = await this.subscriptionService.create(body, name, req.user.id);
			res.status
		} catch {
			throw new BadRequestException();
		}
	}

	@Get("/available")
	@ApiOkResponse({description: 'Returns the services the user can subscribe to'})
	async getAvailable(@Request() req){
		try {
			return this.subscriptionService.getAvailable(req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Get("/subscribed")
	@ApiOkResponse({description: 'Returns the services the user is subscribed to'})
	async getSubscribed(@Request() req){
		try {
			return this.subscriptionService.getSubscribed(req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}

	@Delete("/:name")
	@ApiOkResponse({description: 'The subscription has been deleted succesfully'})
	async deleteSubscription(@Param('name') name: string, @Request() req){
		try {
			return this.subscriptionService.delete(name, req.user.id);
		} catch {
			throw new BadRequestException();
		}
	}
}
