import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './entities/instructor.entity';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,
  ) {}

  async create(createInstructorInput: CreateInstructorInput): Promise<Instructor> {
    const instructor = this.instructorRepository.create(createInstructorInput);
    return this.instructorRepository.save(instructor);
  }

  findAll(): Promise<Instructor[]> {
    return this.instructorRepository.find();
  }

  async findOne(id: number): Promise<Instructor> {
    const instructor = await this.instructorRepository.findOneBy({ id });
    if (!instructor) {
      throw new NotFoundException(`Instructor with ID ${id} not found`);
    }
    return instructor;
  }

  async update(id: number, updateInstructorInput: UpdateInstructorInput): Promise<Instructor> {
    const instructor = await this.findOne(id);
    Object.assign(instructor, updateInstructorInput);
    return this.instructorRepository.save(instructor);
  }

  async remove(id: number): Promise<Instructor> {
    const instructor = await this.findOne(id);
    return this.instructorRepository.remove(instructor);
  }
}
