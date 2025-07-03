import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteInput: CreateClienteInput): Promise<Cliente> {
    const cliente = this.clienteRepository.create(createClienteInput);
    return this.clienteRepository.save(cliente);
  }

  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({ relations: ['clase'] });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id },
      relations: ['clase'],
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
    return cliente;
  }

  async update(id: number, updateClienteInput: UpdateClienteInput): Promise<Cliente> {
    const cliente = await this.findOne(id);
    Object.assign(cliente, updateClienteInput);
    return this.clienteRepository.save(cliente);
  }

  async remove(id: number): Promise<Cliente> {
    const cliente = await this.findOne(id);
    return this.clienteRepository.remove(cliente);
  }
}
