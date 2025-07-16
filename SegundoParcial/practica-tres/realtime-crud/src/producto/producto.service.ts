import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreateProductoDto): Promise<Producto> {
    const nuevoProducto = this.productoRepo.create(dto);
    return this.productoRepo.save(nuevoProducto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepo.find({ relations: ['pedidos'] });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepo.findOne({ where: { id }, relations: ['pedidos'] });
    if (!producto) {
      throw new Error(`Producto with id ${id} not found`);
    }
    return producto;
  }

  async update(id: number, dto: UpdateProductoDto): Promise<Producto> {
    await this.productoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepo.delete(id);
  }
}
