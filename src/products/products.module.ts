import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders } from './products.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...productProviders, ProductsService],
})
export class ProductsModule {}
