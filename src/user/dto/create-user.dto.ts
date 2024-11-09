import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Please provide your first name' })
  @Length(2, 25)
  readonly firstName: string;

  @IsString({ message: 'Please provide your last name' })
  @Length(2, 25)
  readonly lastName: string;

  @IsString({ message: 'Please provide your email' })
  @IsEmail()
  readonly email: string;
}
