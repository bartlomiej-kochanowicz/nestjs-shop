import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from 'products/entities/product.entity';
import { BasketProductDto } from 'basket/dto/basket-product.dto';
import { UserEntity } from 'user/entities/user.entity';

@Entity()
class Basket extends BaseEntity implements BasketProductDto {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('int')
  quantity: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => ProductEntity)
  @JoinColumn()
  details: ProductEntity;
}

export { Basket as BasketEntity };
