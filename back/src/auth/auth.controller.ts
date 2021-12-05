import { Controller, Request, Post, Get, UseGuards, Res, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { GoogleOauthGuard } from './google-oauth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private userService: UserService,
	) {}

	@Post('register')
	async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
		try {
			await this.userService.createUser(registerDto);
			return res.status(200).json({"status": "user created"});
		} catch {
			return res.status(400).json({"status": "user not created"});
		}
	}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@ApiOkResponse({ description: 'Successfully logged in' })
	@ApiUnauthorizedResponse({ description: 'Invalid token' })
	@Get('me')
	getProfile(@Request() req) {
  		return req.user;
  	}

	@Get("/google")
	@UseGuards(GoogleOauthGuard)
	async googleAuth() {
	// Guard redirects
	}

	@Get('/google/redirect')
	@UseGuards(GoogleOauthGuard)
	async googleAuthRedirect(@Request() req, @Res() res: Response) {
		const { access_token } = await this.authService.login(req.user);
		res.cookie('kayo', access_token);
		return res.redirect('http://localhost:3435');
	  }
}
