import { PartialType } from '@nestjs/mapped-types';
import { ProductDto } from 'products/dto/product.dto';
import { CreateBasketProductDto } from './create-basket-product.dto';

export class BasketProductDto extends PartialType(CreateBasketProductDto) {
  details: ProductDto;
}
