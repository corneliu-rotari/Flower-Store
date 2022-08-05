import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dbConfig } from '../ormconfig';
import { AppService } from './app.service';
import { FlowerModule } from './flower/flower.module';
import { UserModule } from './user/user.module';
import { BasketModule } from './basket/basket.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    FlowerModule,
    UserModule,
    BasketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
