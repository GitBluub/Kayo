import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { IsNotEmpty } from "class-validator";
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/models/user.model';


class RegisterDto {
	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	name: string;
}

@Controller('auth')
export class AuthController {
	constructor(
		@InjectModel(User)
		private userModel: typeof User
	) {}

	@Post('login')
	async login(@Req() req: Request, @Res() res: Response) {
		return res.status(400).json({"wow": "a"});
	}

	@Post('register')
	async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
		return this.userModel.create(registerDto);
	}
}
