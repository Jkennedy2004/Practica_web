import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsBoolean, IsInt } from 'class-validator';

@InputType()
export class CreateClienteInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsBoolean()
  membership: boolean;

  @Field(() => Int)
  @IsInt()
  claseId: number;
}
