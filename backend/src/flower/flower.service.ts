import { Injectable } from '@nestjs/common';
import { FlowerDto } from './dto/flowerDto';
//import { UpdateFlowerDto } from './dto/update-flower.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flower } from './entities/flower.entity';

@Injectable()
export class FlowerService {
  constructor(
    @InjectRepository(Flower) private flowerRepository: Repository<Flower>,
  ) {}
  async findAll() {
    return await this.flowerRepository.find();
  }

  async getFlower(flowerId: number) {
    const flower = await this.flowerRepository.findOneBy({
      flower_id: flowerId,
    });
    const { flower_id, flower_name } = flower;
    return {
      flower_id: flower_id,
      flower_name: flower_name,
    };
  }

  addFlower(flowerDTO: FlowerDto) {
    return this.flowerRepository.save(flowerDTO);
  }

  async patchFlower(id: number, flowerDTO: FlowerDto) {
    return this.flowerRepository.update({ flower_id: id }, flowerDTO);
  }

  deleteFlower(id: number) {
    return this.flowerRepository.delete({ flower_id: id });
  }
}
