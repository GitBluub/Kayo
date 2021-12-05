import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

type HostHeader = Request & {
  headers: {
    host: string
  },
  ip: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  @ApiOkResponse({ description: "The server is alive"})
  getHealth(@Res() res) {
    res.status(HttpStatus.OK).send();
  }

  @Get("about.json")
  @ApiOkResponse({ description: "Returns the about.json"})
  async getAbout(@Req() req: HostHeader) {
    return this.appService.getAbout(req.ip);
  }
}
