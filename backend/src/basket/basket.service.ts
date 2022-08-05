import { Injectable } from '@nestjs/common';
import { BasketDto } from './dto/BasketDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Basket } from './entities/basket.entity';
import { Flower } from '../flower/entities/flower.entity';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket) private basketRepository: Repository<Basket>,
    @InjectRepository(Flower) private flowerRepository: Repository<Flower>,
  ) {}
  async addToBasket(user_id: number, flower_id: number) {
    const basket = await this.basketRepository.findOneBy({
      user_id: user_id,
      flower_id: flower_id,
    });
    console.log(basket);
    if (basket) {
      return this.basketRepository.update(
        { user_id: user_id, flower_id: flower_id },
        new BasketDto(basket.user_id, basket.flower_id, basket.quantity + 1),
      );
    } else {
      return this.basketRepository.save(new BasketDto(user_id, flower_id, 1));
    }
  }

  findAll() {
    return `This action returns all basket`;
  }

  async findOne(id: number) {
    const basket: (Basket & { flower_name?: string })[] =
      await this.basketRepository.findBy({
        user_id: id,
      });
    for (const b of basket) {
      const n = await this.flowerRepository.findOneBy({
        flower_id: b.flower_id,
      });
      b.flower_name = n.flower_name;
    }
    return basket;
  }

  update(id: number, updateBasketDto: Basket) {
    return `This action updates a #${id} basket`;
  }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }
}
