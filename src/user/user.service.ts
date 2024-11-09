import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserQueryRepository } from './user.query-repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userQueryRepository: UserQueryRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userQueryRepository.findAll();
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.create(dto);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(id, dto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.remove(id);
  }
}
