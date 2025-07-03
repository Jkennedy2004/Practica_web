import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './entities/clase.entity';
import { CreateClaseInput } from './dto/create-clase.input';
import { UpdateClaseInput } from './dto/update-clase.input';

@Injectable()
export class ClaseService {
  constructor(
    @InjectRepository(Clase)
    private claseRepository: Repository<Clase>,
  ) {}

  async create(createClaseInput: CreateClaseInput): Promise<Clase> {
    const clase = this.claseRepository.create(createClaseInput);
    return this.claseRepository.save(clase);
  }

  findAll(): Promise<Clase[]> {
    return this.claseRepository.find({ relations: ['instructor'] });
  }

  async findOne(id: number): Promise<Clase> {
    const clase = await this.claseRepository.findOne({
      where: { id },
      relations: ['instructor'],
    });
    if (!clase) {
      throw new NotFoundException(`Clase with ID ${id} not found`);
    }
    return clase;
  }

  async update(id: number, updateClaseInput: UpdateClaseInput): Promise<Clase> {
    const clase = await this.findOne(id);
    Object.assign(clase, updateClaseInput);
    return this.claseRepository.save(clase);
  }

  async remove(id: number): Promise<Clase> {
    const clase = await this.findOne(id);
    return this.claseRepository.remove(clase);
  }
}
