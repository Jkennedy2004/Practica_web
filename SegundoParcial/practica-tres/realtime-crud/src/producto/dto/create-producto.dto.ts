import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsOptional()
  @IsBoolean()
  disponible?: boolean;
}
