import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsString()
  telefono: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
