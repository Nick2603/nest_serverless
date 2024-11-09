import { BaseEntity } from 'src/db/base.entity';
import { Entity, Column, Index } from 'typeorm';

@Index(['firstName', 'lastName'], { unique: true })
@Entity()
export class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  email: string;
}
