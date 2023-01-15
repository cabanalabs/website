import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { AppService } from './app.service';
import {ContactUsBody, EmailBody} from "./types";
import {FilterEmptyValuePipe} from "@cocabana/lib-core";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/newsletter/signup')
  async signUp(@Body() body: EmailBody) {
    await this.appService.signup(body.email);
    return { success: true };
  }

  @Post('/contact/us')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }), new FilterEmptyValuePipe())
  async contact(@Body() body: ContactUsBody) {
    await this.appService.contactUs(body);
    return { success: true };
  }
}

//curl -X POST "http://localhost:3002/cabana-identity/us-central1/info/newsletter/signup" -H 'Content-Type: application/json' -d '{"email":"email@email"}'
//curl -X POST "http://localhost:3002/cabana-identity/us-central1/info/contact/us" -H 'Content-Type: application/json' -d '{"email":"email@email.com", "subject": "test", "message": "test", "name": "John"}'

//curl -X POST "https://cabanalabs.com/info/newsletter/signup" -H 'Content-Type: application/json' -d '{"email":"email@email"}'
//curl -X POST "https://cabanalabs.com/info/contact/us" -H 'Content-Type: application/json' -d '{"email":"email@email.com", "subject": "test", "message": "test", "name": "John"}'