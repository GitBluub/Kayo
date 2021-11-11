import { Controller, Get, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
  	findAll(@Req() request: Request) {
		return this.userService.findAll();
  	}
}
