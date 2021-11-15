import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {

	constructor(private userService: UserService) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.userService.findOne(username);
		if (user && bcrypt.compareSync(pass, user.password)) {
		  const { password, ...result } = user;
		  return result;
		}
		return null;
	}
}
