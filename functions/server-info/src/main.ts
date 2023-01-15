import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import {https} from 'firebase-functions';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

const ROUTE_PREFIX = '/info'

const corsOptions = {
    credentials: true, origin: true
}

async function createMainFunction (expressInstance): Promise<void> {

    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
        {
            logger: ['error', 'warn']
        }
    );

    app.enableCors(corsOptions);
    app.useGlobalPipes(new ValidationPipe({transform: true, whitelist: true}));

    await app.init();
}

let main;

async function init() {
    main = express();
    await createMainFunction(main);
}

exports.info = https.onRequest(async (req, res) => {
    if(!main) await init();
    if (req.url.startsWith(ROUTE_PREFIX)) {
        req.url = req.url.substring(ROUTE_PREFIX.length);
    }
    main(req, res);
});