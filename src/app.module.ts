import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [DatabaseModule, ProductsModule, UserModule, BasketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
