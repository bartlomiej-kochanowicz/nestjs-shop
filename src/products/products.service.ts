import { Inject, Injectable } from '@nestjs/common';
import { MAX_PER_PAGE } from 'constants/pagination';
import { Repository } from 'typeorm';
import { Pagination } from 'types/Pagination';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { name, price, quantity, description } = createProductDto;

    const newproduct = new ProductEntity();

    newproduct.name = name;
    newproduct.price = price;
    newproduct.quantity = quantity;
    newproduct.description = description;

    await this.productRepository.save(newproduct);

    return newproduct;
  }

  async findAll(page: number): Promise<Pagination<ProductEntity>> {
    const [products, count] = await this.productRepository.findAndCount({
      skip: MAX_PER_PAGE * (page - 1),
      take: MAX_PER_PAGE,
    });

    const total = Math.ceil(count / MAX_PER_PAGE);

    return {
      collection: products,
      pagination: {
        total,
        current: page,
      },
    };
  }

  async findOne(uuid: string): Promise<ProductEntity> {
    return (await this.productRepository.find({ where: { uuid } }))[0];
  }

  async update(
    uuid: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const { name, description, price, quantity } = updateProductDto;

    const productToUpdate = await this.productRepository.findOneBy({ uuid });

    if (name) productToUpdate.name = name;
    if (description) productToUpdate.description = description;
    if (price) productToUpdate.price = price;
    if (quantity) productToUpdate.quantity = quantity;

    await this.productRepository.save(productToUpdate);

    return productToUpdate;
  }

  async remove(uuid: string): Promise<void> {
    const productToRemove = await this.productRepository.findOneBy({
      uuid,
    });

    await this.productRepository.remove(productToRemove);
  }
}
