import { BadRequestException, Controller, Delete, Get, MethodNotAllowedException, Param, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Invalid token.',
})
export class UserController {
	constructor(private userService: UserService) {}

	@ApiOkResponse({ description: 'Returns the lists of all users in the database' })
	@ApiBadRequestResponse({ description: 'Error with database' })
	@Get('users')
  	async findAll(@Req() req) {
		let isAdmin = false;
		try {
			isAdmin = await this.userService.isAdmin(req.user.id);
		} catch {
			throw new BadRequestException();
		}
		if (isAdmin) {
			try {
				return this.userService.findAll();
			} catch {
				throw new BadRequestException();
			}
		} else {
			throw new UnauthorizedException();
		}
  	}

	@ApiOkResponse({ description: 'Successfully deleted the user' })
	@ApiBadRequestResponse({ description: 'Error with database' })  
	@Delete('user/:id')
	async delete(@Req() req, @Param('id') id: number) {
		let isAdmin = false;
		try {
			isAdmin = await this.userService.isAdmin(req.user.id);
		} catch {
			throw new BadRequestException();
		}
		if (isAdmin) {
			return this.userService.deleteUser(id);
		} else {
			throw new UnauthorizedException();
		}
	}
}
