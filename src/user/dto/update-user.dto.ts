import { IsString, Length, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Please provide your first name' })
  @Length(2, 25)
  readonly firstName?: string;

  @IsOptional()
  @IsString({ message: 'Please provide your last name' })
  @Length(2, 25)
  readonly lastName?: string;

  @IsOptional()
  @IsString({ message: 'Please provide your email' })
  @IsEmail()
  readonly email?: string;
}
