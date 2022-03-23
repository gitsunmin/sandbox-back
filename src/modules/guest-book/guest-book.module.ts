import { Module } from '@nestjs/common';
import { GuestBookService } from './guest-book.service';
import { GuestBookRepository } from './guest-book.repository';
import { GuestBookController } from './guest-book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GuestBookRepository])],
  controllers: [GuestBookController],
  providers: [GuestBookService],
})
export class GuestBookModule {}
