import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import PayloadInterface from './interface/payload.interface';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    private userService: UserService,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:8080/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    
    const { id, name, emails } = profile;

    let user = await this.userService.findOneByProvider('google', id);
    if (!user) {
      user = await this.userService.createProviderUser({
        provider: 'google',
        providerId: id,
        username: name.givenName,
      });
    }
    return user;
  }
}