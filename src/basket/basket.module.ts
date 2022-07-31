import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { productProviders } from 'products/products.providers';
import { userProviders } from 'user/user.providers';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { basketProviders } from './basket.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BasketController],
  providers: [
    ...productProviders,
    ...basketProviders,
    ...userProviders,
    BasketService,
  ],
})
export class BasketModule {}
