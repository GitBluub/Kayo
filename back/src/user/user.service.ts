
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

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
}

