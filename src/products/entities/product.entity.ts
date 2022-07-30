import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'float', precision: 6, scale: 2 })
  price: number;

  @Column('int')
  quantity: number;
}
