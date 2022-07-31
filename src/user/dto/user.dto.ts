import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class User extends PartialType(CreateUserDto) {
  uuid: string;
}
