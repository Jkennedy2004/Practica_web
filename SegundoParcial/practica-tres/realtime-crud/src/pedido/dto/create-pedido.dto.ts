import { IsNumber, IsDateString } from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  cantidad: number;

  @IsDateString()
  fecha: string;

  @IsNumber()
  usuarioId: number;

  @IsNumber()
  productoId: number;
}
