import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class CreateClaseInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  schedule: string;

  @Field(() => Int)
  @IsInt()
  instructorId: number;
}
