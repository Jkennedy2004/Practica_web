import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateInstructorInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  specialty: string;

  @Field()
  @IsEmail()
  email: string;
}
