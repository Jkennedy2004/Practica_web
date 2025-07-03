import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Instructor } from '../../instructor/entities/instructor.entity';

@ObjectType()
@Entity()
export class Clase {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  schedule: string;

  @Field(() => Int)
  @Column()
  instructorId: number;

  @Field(() => Instructor)
  @ManyToOne(() => Instructor)
  @JoinColumn({ name: 'instructorId' })
  instructor: Instructor;
}
