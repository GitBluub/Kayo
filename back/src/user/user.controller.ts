import { Controller, Delete, Get, MethodNotAllowedException, Param, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse({
  description: 'Unauthorized.',
})
export class UserController {
	constructor(private userService: UserService) {}

	@Get('users')
  	findAll(@Req() req) {
		if (this.userService.isAdmin(req.user.id)) {
			return this.userService.findAll();
		} else {
			throw new UnauthorizedException();
		}
  	}

	@Delete('user/:id')
	delete(@Req() req, @Param('id') id: number) {
		if (this.userService.isAdmin(req.user.id)) {
			return this.userService.deleteUser(id);
		} else {
			throw new UnauthorizedException();
		}
	}
}
