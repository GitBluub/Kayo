import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService
	) {}

	@Post('login')
	async login(@Body() loginDto: LoginDto, @Req() req: Request, @Res() res: Response) {
		try {
			const token = await this.authService.login(loginDto);
			if (token === "")
				return res.status(400).json({"message": "invalid credentials"});
			return res.status(200).json({"token": token});
		} catch {
			return res.status(500).json({"message": "server error"});
		}
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
