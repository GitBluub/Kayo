import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/models/user.model';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { User } from './user';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'kayo',
      models: [User],
    }),
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, User],
  exports: [SequelizeModule, UserModule],
})
export class AppModule {}
