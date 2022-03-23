import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const { listen } = await NestFactory.create(AppModule);
  await listen(process.env.PORT);
})();
