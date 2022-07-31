import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketProductDto } from './dto/create-basket-product.dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  async create(@Body() createBasketProductDto: CreateBasketProductDto) {
    return await this.basketService.create(createBasketProductDto);
  }

  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.basketService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
