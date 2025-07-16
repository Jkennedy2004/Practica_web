import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@WebSocketGateway({ cors: true })
export class UsuarioGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly usuarioService: UsuarioService) {}

  @SubscribeMessage('createUsuario')
  async create(@MessageBody() dto: CreateUsuarioDto) {
    await this.usuarioService.create(dto);
    this.emitUsuariosActualizados();
  }

  @SubscribeMessage('updateUsuario')
  async update(@MessageBody() payload: { id: number; data: UpdateUsuarioDto }) {
    await this.usuarioService.update(payload.id, payload.data);
    this.emitUsuariosActualizados();
  }

  @SubscribeMessage('deleteUsuario')
  async delete(@MessageBody() id: number) {
    await this.usuarioService.remove(id);
    this.emitUsuariosActualizados();
  }

  @SubscribeMessage('listUsuario')
  async list() {
    this.emitUsuariosActualizados();
  }

  private async emitUsuariosActualizados() {
    const usuarios = await this.usuarioService.findAll();
    this.server.emit('usuariosActualizados', usuarios);
  }
}
