import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Pagination } from 'types/Pagination';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
  ): Promise<Pagination<ProductEntity>> {
    return await this.productsService.findAll(+page);
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<ProductEntity> {
    return await this.productsService.findOne(uuid);
  }

  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    return await this.productsService.update(uuid, updateProductDto);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    return await this.productsService.remove(uuid);
  }
}
