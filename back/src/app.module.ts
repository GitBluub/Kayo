import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubscriptionModule } from './subscription/subscription.module';
import { WidgetModule } from './widget/widget.module';
import { SpotifyModule } from './spotify/spotify.module';
import { StocksModule } from './stocks/stocks.module';
import { WeatherModule } from './weather/weather.module';
import authConfig from './config/authConfig';
import serviceConfig from './config/serviceConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [authConfig, serviceConfig]
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      autoLoadModels: true,
      sync: { force: true, },
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    SubscriptionModule,
    WidgetModule,
    SpotifyModule,
    StocksModule,
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
