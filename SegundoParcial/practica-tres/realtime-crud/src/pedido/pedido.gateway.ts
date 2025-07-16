import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@WebSocketGateway({ cors: true })
export class PedidoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly pedidoService: PedidoService) {}

  @SubscribeMessage('createPedido')
  async create(@MessageBody() dto: CreatePedidoDto) {
    await this.pedidoService.create(dto);
    this.emitPedidosActualizados();
  }

  @SubscribeMessage('updatePedido')
  async update(
    @MessageBody() payload: { id: number; data: UpdatePedidoDto },
  ) {
    await this.pedidoService.update(payload.id, payload.data);
    this.emitPedidosActualizados();
  }

  @SubscribeMessage('deletePedido')
  async delete(@MessageBody() id: number) {
    await this.pedidoService.remove(id);
    this.emitPedidosActualizados();
  }

  @SubscribeMessage('listPedido')
  async list() {
    this.emitPedidosActualizados();
  }

  private async emitPedidosActualizados() {
    const pedidos = await this.pedidoService.findAll();
    this.server.emit('pedidosActualizados', pedidos);
  }
}
