import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'user/dto/user.dto';

@Entity()
class Users implements User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('tinytext')
  email: string;

  @Column('tinytext')
  password: string;
}

export { Users as UserEntity };
