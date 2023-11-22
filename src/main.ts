import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    exposedHeaders: ['Content-Range'],
  })
  app.useGlobalPipes(new ValidationPipe());
  app.use((req, res, next) => {
    res.header('Content-Range', 'tasks 0-1/2');
    next();
  });

  await app.listen(5000);
}
bootstrap();
