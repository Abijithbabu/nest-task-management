import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Example CORS configuration
app.use((req, res, next) => {
  res.header('Content-Range', 'tasks 0-20/20')
  next()
});

  await app.listen(5000);
}
bootstrap();
