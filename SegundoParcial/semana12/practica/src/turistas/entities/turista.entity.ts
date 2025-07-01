import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'turistas' })
export class Turista {

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  nombre: string;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
  
}
