import { Controller, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
	constructor() {}

	@Post('login')
	async login(@Req() req: Request, @Res() res: Response) {
		return res.status(400).json({"wow": "a"});
	}

	@Post('register')
	async register() {
		return {
			message: 'Hello World!',
		};
	}
}
