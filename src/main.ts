import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'hero2',
        brokers: ['172.18.0.4:9092'],
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(4444);
}
bootstrap();
