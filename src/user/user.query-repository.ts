import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserQueryRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      const queryBuilder = this.usersRepository.createQueryBuilder('u');

      queryBuilder.addOrderBy('u.lastName', 'ASC');
      queryBuilder.addOrderBy('u.firstName', 'ASC');

      return queryBuilder.getMany();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
