import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { CreateClaseInput } from './create-clase.input';

@InputType()
export class UpdateClaseInput extends PartialType(CreateClaseInput) {}
