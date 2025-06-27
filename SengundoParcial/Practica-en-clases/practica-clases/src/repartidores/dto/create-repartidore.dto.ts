import { IsOptional, isString, isNumber, isNotEmpty, } from "class-validator";

export class CreateRepartidoreDto {
    @isNumber()
    @IsOptional()
        id: number;
    @isString()
    @isNotEmpty()
        nombre: string;
    @isString()      
        apellido: string;
    @isNumber()
        edad: number;
    @isString()
    @IsOptional
        nacionalidad: string;
    @isString()
    @IsOptional
        estado: string
}
