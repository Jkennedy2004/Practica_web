import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaseService } from './clase.service';
import { ClaseResolver } from './clase.resolver';
import { Clase } from './entities/clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase])], // Registra el repositorio
  providers: [ClaseResolver, ClaseService],
})
export class ClaseModule {}
