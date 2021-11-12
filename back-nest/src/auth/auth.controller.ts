import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService
	) {}

	@Post('login')
	async login(@Req() req: Request, @Res() res: Response) {
		return res.status(400).json({"wow": "a"});
	}

	@Post('register')
	async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
		try {
			await this.authService.createUser(registerDto);
			return res.status(200).json({"status": "user created"});
		} catch {
			return res.status(400).json({"status": "user not created"});
		}
	}
}
