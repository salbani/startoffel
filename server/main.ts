import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import * as bodyParser from 'body-parser';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.setGlobalPrefix('api');
  await app.listen(4200);
}
bootstrap();
