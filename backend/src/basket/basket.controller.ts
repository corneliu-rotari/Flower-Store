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
import { BasketDto } from './dto/BasketDto';
import { Basket } from './entities/basket.entity';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post('addToBasket/:user_id/:flower_id')
  create(
    @Param('user_id') user_id: number,
    @Param('flower_id') flower_id: number,
  ) {
    console.log(user_id+" "+flower_id);
    return this.basketService.addToBasket(user_id, flower_id);
  }

  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @Get(':user_id')
  async findOne(@Param('user_id') user_id: number) {
    return await this.basketService.findOne(+user_id);
  }

  @Patch(':flower_id')
  update(@Param('id') id: string, @Body() updateBasketDto: Basket) {
    return this.basketService.update(+id, updateBasketDto);
  }

  @Delete(':flower_id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
