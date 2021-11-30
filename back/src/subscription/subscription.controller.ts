import { Controller, Param, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { SubscriptionDto } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('service')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiUnauthorizedResponse({description: 'Unauthorized'})
export class SubscriptionController {
	constructor (private subscriptionService: SubscriptionService) {}

	@Post('/:name')
	@ApiCreatedResponse({ description: "The subscription has been created succesfully"})
	async create(@Body() body: SubscriptionDto, @Param('name') name: string, @Request() req){
		return this.subscriptionService.create(body, name, req.user.userId);
	}

	@Get("/available")
	@ApiOkResponse({description: 'Returns the services the user can subscribe to'})
	async getAvailable(@Request() req){
		return this.subscriptionService.getAvailable(req.user.userId);
	}

	@Get("/subscribed")
	@ApiOkResponse({description: 'Returns the services the user is subscribed to'})
	async getSubscribed(@Request() req){
		return this.subscriptionService.getSubscribed(req.user.userId);
	}

	//todo: delete
}
