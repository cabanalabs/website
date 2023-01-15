import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FirebaseModule} from "@cocabana/lib-core";

@Module({
  imports: [
    FirebaseModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
