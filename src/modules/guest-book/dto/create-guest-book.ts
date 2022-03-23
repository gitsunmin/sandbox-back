import { IsNotEmpty } from 'class-validator';

export class CreateGuestBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
