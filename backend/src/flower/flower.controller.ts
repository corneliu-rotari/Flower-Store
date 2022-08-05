import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlowerService } from './flower.service';
import { FlowerDto } from './dto/flowerDto';

@Controller('store')
export class FlowerController {
  constructor(private readonly flowerService: FlowerService) {}

  @Post('/addFlower')
  create(@Body() createFlowerDto: FlowerDto) {
    return this.flowerService.addFlower(createFlowerDto);
  }

  @Get()
  findAll() {
    return this.flowerService.findAll();
  }

  @Get(':flower_id')
  findOne(@Param('id') id: string) {
    return this.flowerService.getFlower(+id);
  }

  @Patch(':flower_id')
  update(@Param('id') id: string, @Body() updateFlowerDto: FlowerDto) {
    return this.flowerService.patchFlower(+id, updateFlowerDto);
  }

  @Delete(':flower_id')
  remove(@Param('id') id: string) {
    return this.flowerService.deleteFlower(+id);
  }
}
