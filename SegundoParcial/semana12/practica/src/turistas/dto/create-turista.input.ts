import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateTuristaInput {
  @IsString()
  @Field(() => String, { description: 'Example field (placeholder)' })
  nombre: string;

  @IsEmail()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
