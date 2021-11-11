
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}

