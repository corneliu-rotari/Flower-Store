import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Basket} from "./entities/basket.entity";
import {Flower} from "../flower/entities/flower.entity";

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports: [TypeOrmModule.forFeature([Basket,Flower])],
})
export class BasketModule {}
