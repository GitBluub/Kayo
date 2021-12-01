import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
  ) {}
  getAbout() {
    const services = this.configService.get('services').services;
    return {
      client: {
        host: "10.101.01"
      },
      server: {
        current_time: "12131",
        services
      }
    }
  }
}
