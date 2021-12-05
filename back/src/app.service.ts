import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
  ) {}
  
  getAbout(host: string) {
    const services = this.configService.get('services').services;
    return {
      client: {
        host: host.substring(7)
      },
      server: {
        current_time: Math.floor(new Date().getTime() / 1000),
        services
      }
    }
  }
}
