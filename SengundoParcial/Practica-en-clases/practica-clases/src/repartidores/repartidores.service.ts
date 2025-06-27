import { Injectable } from '@nestjs/common';
import { CreateRepartidoreDto } from './dto/create-repartidore.dto';
import { UpdateRepartidoreDto } from './dto/update-repartidore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repartidore } from './entities/repartidore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepartidoresService {
  constructor(@InjectRepository(Repartidore)
  private repository: Repository<Repartidore>,
) {}
  create(createRepartidoreDto: CreateRepartidoreDto) {
    const Repartidore = this.repository.create(createRepartidoreDto);
    return 'This action adds a new repartidore';
  }

  findAll() {
    return `This action returns all repartidores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repartidore`;
  }

  update(id: number, updateRepartidoreDto: UpdateRepartidoreDto) {
    return `This action updates a #${id} repartidore`;
  }

  remove(id: number) {
    return `This action removes a #${id} repartidore`;
  }
}
