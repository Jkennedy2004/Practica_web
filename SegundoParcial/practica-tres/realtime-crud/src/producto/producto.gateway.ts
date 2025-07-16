import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@WebSocketGateway({ cors: true })
export class ProductoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly productoService: ProductoService) {}

  @SubscribeMessage('createProducto')
  async create(@MessageBody() dto: CreateProductoDto) {
    await this.productoService.create(dto);
    this.emitProductosActualizados();
  }

  @SubscribeMessage('updateProducto')
  async update(@MessageBody() payload: { id: number; data: UpdateProductoDto }) {
    await this.productoService.update(payload.id, payload.data);
    this.emitProductosActualizados();
  }

  @SubscribeMessage('deleteProducto')
  async delete(@MessageBody() id: number) {
    await this.productoService.remove(id);
    this.emitProductosActualizados();
  }

  @SubscribeMessage('listProducto')
  async list() {
    this.emitProductosActualizados();
  }

  private async emitProductosActualizados() {
    const productos = await this.productoService.findAll();
    this.server.emit('productosActualizados', productos);
  }
}
