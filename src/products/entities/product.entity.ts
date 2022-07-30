import { ProductDto } from 'products/dto/product.dto';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Product extends BaseEntity implements ProductDto {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 60 })
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'float', precision: 6, scale: 2 })
  price: number;

  @Column('int')
  quantity: number;
}

export { Product as ProductEntity };
