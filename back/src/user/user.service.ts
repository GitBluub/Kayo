
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

  async deleteUser(id: number): Promise<number> {
    return await this.userModel.destroy({
      where: {
        id,
      }
    });
  }

  async isAdmin(id: number): Promise<boolean> {
    const user = await this.findOneById(id);
    return user.isAdmin;
  }

  async findOneById(id: number): Promise<User> | null {
		return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findOne(username: string): Promise<User> | null {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async findOneByProvider(provider: string, providerId: string): Promise<User> | null {
    return this.userModel.findOne({
      where: {
        provider,
        providerId
      },
    });
  }

	async createUser(registerDto: RegisterDto): Promise<User> {
    const userCount = await this.userModel.count();
		return await this.userModel.create({
			...registerDto,
			password: await bcrypt.hash(registerDto.password, 8),
      isAdmin: userCount === 0,
		});
	}

  async createProviderUser({provider, providerId, username} : { username: string, provider: string, providerId: string}): Promise<User> {
    const userCount = await this.userModel.count();
    return await this.userModel.create({
      provider,
      providerId,
      username,
      isAdmin: userCount === 0,
    });
  }
}

