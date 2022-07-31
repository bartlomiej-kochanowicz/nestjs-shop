import { DataSource } from 'typeorm';
import { BasketEntity } from './entities/basket.entity';

export const basketProviders = [
  {
    provide: 'BASKET_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BasketEntity),
    inject: ['DATA_SOURCE'],
  },
];
