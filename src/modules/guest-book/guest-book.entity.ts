import { BaseEntity, Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';
import { GuestBookStatus } from './guest-book-status.enum';

@Entity()
export class GuestBook extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: GuestBookStatus.PUBLIC })
  status: GuestBookStatus;
}
