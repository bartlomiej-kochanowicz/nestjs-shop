import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'products/entities/product.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'user/entities/user.entity';
import { CreateBasketProductDto } from './dto/create-basket-product.dto';
import { BasketEntity } from './entities/basket.entity';

@Injectable()
export class BasketService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
    @Inject('BASKET_REPOSITORY')
    private basketRepository: Repository<BasketEntity>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createBasketProductDto: CreateBasketProductDto) {
    const { productUuid, quantity, userUuid } = createBasketProductDto;

    const currentBasketProduct = await this.basketRepository.findOneBy({
      details: {
        uuid: productUuid,
      },
    });

    const product = await this.productRepository.findOneByOrFail({
      uuid: productUuid,
    });

    if (currentBasketProduct) {
      currentBasketProduct.quantity += quantity;
      product.quantity -= quantity;

      this.basketRepository.save(currentBasketProduct);
      this.productRepository.save(product);

      return;
    }

    const user = await this.userRepository.findOneByOrFail({
      uuid: userUuid,
    });

    if (product.quantity > 0 && user) {
      const newBasketProduct = new BasketEntity();

      newBasketProduct.quantity = quantity;

      newBasketProduct.details = product;
      newBasketProduct.user = user;

      product.quantity -= quantity;

      this.basketRepository.save(newBasketProduct);
      this.productRepository.save(product);
    }
  }

  findAll() {
    return `This action returns all basket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basket`;
  }

  update(id: number) {
    return `This action updates a #${id} basket`;
  }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }
}
