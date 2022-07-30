import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'admin',
        database: 'shop-db',
        entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
        synchronize: true,
        logger: 'advanced-console',
      });

      return dataSource.initialize();
    },
  },
];
