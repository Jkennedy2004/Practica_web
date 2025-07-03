import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateInstructorInput } from './create-instructor.input';

@InputType()
export class UpdateInstructorInput extends PartialType(CreateInstructorInput) {}
