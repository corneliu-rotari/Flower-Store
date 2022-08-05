import { Module } from '@nestjs/common';
import { FlowerService } from './flower.service';
import { FlowerController } from './flower.controller';
import { Flower } from './entities/flower.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FlowerController],
  providers: [FlowerService],
  imports: [TypeOrmModule.forFeature([Flower])],
})
export class FlowerModule {}
