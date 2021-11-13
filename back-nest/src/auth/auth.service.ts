import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(
	  @InjectModel(User)
	  private userModel: typeof User,
	) {}

	async createUser(registerDto: RegisterDto): Promise<User> {
		await this.userModel.sync();
		console.log(bcrypt);
		return await this.userModel.create({
			...registerDto,
			password: await bcrypt.hash(registerDto.password, 8)
		});
	}

	async login(loginDto: LoginDto): Promise<string> {
		let user = await this.userModel.findOne({
			where: {
				name: loginDto.name
			},
		});
		let passwordIsValid = bcrypt.compareSync(loginDto.password, user.password);
        if (!passwordIsValid) {
            return "";
        }
		let token = jwt.sign({ username: user.name}, "authSecret", {
            expiresIn: 30000 // 500 minutes
        });
		return token;
	}
}
