import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { GuestBookStatus } from '../guest-book-status.enum';

export class GuestBookStatusValidationPipe implements PipeTransform {
  readonly StatusOption: GuestBookStatus[] = [
    GuestBookStatus.PRIVATE,
    GuestBookStatus.PUBLIC,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }

  private isStatusValid(value) {
    return this.StatusOption.includes(value);
  }
}
