import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { GuestBook } from './guest-book.entity';
import { CreateGuestBookDto } from './dto/create-guest-book';
import { GuestBookStatus } from './guest-book-status.enum';

@EntityRepository(GuestBook)
export class GuestBookRepository extends Repository<GuestBook> {
  getAllGuestBooks(): Promise<GuestBook[]> {
    return this.find();
  }

  async getGuestBookById(id: string): Promise<GuestBook> {
    const found = await this.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find guestBook with id: ${id}`);
    }

    return found;
  }

  async createGuestBook(
    createGuestBookDto: CreateGuestBookDto,
  ): Promise<GuestBook> {
    const { title, description } = createGuestBookDto;
    const guestBook: GuestBook = this.create({
      title,
      description,
      status: GuestBookStatus.PUBLIC,
    });

    await this.save(guestBook);

    return guestBook;
  }

  async deleteGuestBook(id: string): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find guestBook with id: ${id}`);
    }
  }

  async updateGuestBook(
    id: string,
    status: GuestBookStatus,
  ): Promise<GuestBook> {
    const guestBook = await this.getGuestBookById(id);
    guestBook.status = status;
    return await this.save(guestBook);
  }
}
