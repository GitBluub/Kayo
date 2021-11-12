import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
	constructor(
	  @InjectModel(User)
	  private userModel: typeof User,
	) {}

	async createUser(registerDto: RegisterDto): Promise<User> {
		await this.userModel.sync();
		return await this.userModel.create(registerDto);
	}
}
