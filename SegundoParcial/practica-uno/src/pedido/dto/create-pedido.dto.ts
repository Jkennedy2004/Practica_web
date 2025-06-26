import { IsDateString, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @IsDateString()
  fecha: Date;

  @IsNumber()
  usuarioId: number;

  @IsNumber()
  total: number;
}
