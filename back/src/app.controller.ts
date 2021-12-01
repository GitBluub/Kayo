import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  @ApiOkResponse({ description: "The server is alive"})
  getHealth(@Res() res) {
    return ""
  }

  @Get("/about.json")
  @ApiOkResponse({ description: "Returns the about.json"})
  getAbout() {
    return this.appService.getAbout();
  }
}
