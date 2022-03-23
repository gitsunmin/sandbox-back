import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GuestBookService } from './guest-book.service';
import { GuestBookStatus } from './guest-book-status.enum';
import { CreateGuestBookDto } from './dto/create-guest-book';
import { GuestBook } from './guest-book.entity';
import { GuestBookStatusValidationPipe } from './pipe/guest-book-status-vaildation.pipe';

@Controller('guest-book')
export class GuestBookController {
  constructor(private guestBookService: GuestBookService) {}

  @Get()
  getAllGuestBook(): Promise<GuestBook[]> {
    return this.guestBookService.getAllGuestBooks();
  }

  @Get('/:id')
  getGuestBookById(@Param('id') id: string): Promise<GuestBook> {
    return this.guestBookService.getGuestBookById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createGuestBook(
    @Body() createGuestBookDto: CreateGuestBookDto,
  ): Promise<GuestBook> {
    return this.guestBookService.createGuestBook(createGuestBookDto);
  }

  @Delete('/:id')
  deleteGuestBook(@Param('id') id: string) {
    this.guestBookService.deleteGuestBook(id);
  }

  @Patch('/:id/status')
  updateGuestBookStatus(
    @Param('id') id: string,
    @Body('status', GuestBookStatusValidationPipe) status: GuestBookStatus,
  ) {
    return this.guestBookService.updateGuestBook(id, status);
  }
}
