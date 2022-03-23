import { Injectable, NotFoundException } from '@nestjs/common';
import { GuestBook } from './guest-book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GuestBookRepository } from './guest-book.repository';
import { CreateGuestBookDto } from './dto/create-guest-book';
import { GuestBookStatus } from './guest-book-status.enum';

@Injectable()
export class GuestBookService {
  constructor(
    @InjectRepository(GuestBookRepository)
    private guestBookRepository: GuestBookRepository,
  ) {}

  getAllGuestBooks(): Promise<GuestBook[]> {
    return this.guestBookRepository.getAllGuestBooks();
  }

  getGuestBookById(id: string): Promise<GuestBook> {
    return this.guestBookRepository.getGuestBookById(id);
  }

  createGuestBook(createGuestBookDto: CreateGuestBookDto): Promise<GuestBook> {
    return this.guestBookRepository.createGuestBook(createGuestBookDto);
  }

  deleteGuestBook(id: string): void {
    this.guestBookRepository.deleteGuestBook(id);
  }

  updateGuestBook(id: string, status: GuestBookStatus): Promise<GuestBook> {
    return this.guestBookRepository.updateGuestBook(id, status);
  }
}
