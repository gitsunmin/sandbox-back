import { Module } from '@nestjs/common';
import { GuestBookModule } from './modules/guest-book/guest-book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getTypeORMConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getTypeORMConfig()),
    GuestBookModule,
  ],
})
export class AppModule {}
