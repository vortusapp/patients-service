import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';




async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;
  await app.listen(port);
  logger.log(
    `Application listening of ${port} in ${process.env.NODE_ENV} mode`,
  );
  
}
bootstrap();
