
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RegisterDto } from '../auth/dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOneById(id: number): Promise<User> | null {
		return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findOne(name: string): Promise<User> | null {
    return this.userModel.findOne({
      where: {
        name,
      },
    });
  }

	async createUser(registerDto: RegisterDto): Promise<User> {
		return await this.userModel.create({
			...registerDto,
			password: await bcrypt.hash(registerDto.password, 8)
		});
	}
}

