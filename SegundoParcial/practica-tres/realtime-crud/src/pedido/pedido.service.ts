import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../producto/entities/producto.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${dto.usuarioId} no encontrado`);
    }

    const producto = await this.productoRepo.findOneBy({ id: dto.productoId });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${dto.productoId} no encontrado`);
    }

    const nuevoPedido = this.pedidoRepo.create({
      cantidad: dto.cantidad,
      fecha: new Date(dto.fecha),
      usuario: usuario,
      producto: producto,
    });

    return this.pedidoRepo.save(nuevoPedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepo.find({ relations: ['usuario', 'producto'] });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepo.findOne({
      where: { id },
      relations: ['usuario', 'producto'],
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }

    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);

    if (dto.usuarioId) {
      const nuevoUsuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
      if (!nuevoUsuario) {
        throw new NotFoundException(`Usuario con ID ${dto.usuarioId} no encontrado`);
      }
      pedido.usuario = nuevoUsuario;
    }

    if (dto.productoId) {
      const nuevoProducto = await this.productoRepo.findOneBy({ id: dto.productoId });
      if (!nuevoProducto) {
        throw new NotFoundException(`Producto con ID ${dto.productoId} no encontrado`);
      }
      pedido.producto = nuevoProducto;
    }

    if (dto.cantidad !== undefined) {
      pedido.cantidad = dto.cantidad;
    }

    if (dto.fecha) {
      pedido.fecha = new Date(dto.fecha);
    }

    return this.pedidoRepo.save(pedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepo.remove(pedido);
  }
}
