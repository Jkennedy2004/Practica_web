import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { ClienteResolver } from './cliente.resolver';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],  // Registra el repositorio para inyección
  providers: [ClienteResolver, ClienteService],
})
export class ClienteModule {}
