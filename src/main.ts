import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  const PORT = Number(process.env.PORT) || 8080;
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_USER);
  await app.listen(PORT);
}
bootstrap();
