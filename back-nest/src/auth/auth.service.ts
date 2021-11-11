import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';

@Injectable()
export class AuthService {
	constructor(
	  @InjectModel(User)
	  private userModel: typeof User,
	) {}

	async createUser(username:string, password: string): Promise<User> {
		return await this.userModel.create({
			name: username,
			password: password,
		});
	}
}
