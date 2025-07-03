import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Clase } from '../../clase/entities/clase.entity';

@ObjectType()
@Entity()
export class Cliente {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  membership: boolean;

  @Field(() => Int)
  @Column()
  claseId: number;

  @Field(() => Clase, { nullable: true }) // <- permite null para evitar errores en GraphQL
  @ManyToOne(() => Clase, { nullable: true }) // <- también lo indica a TypeORM
  @JoinColumn({ name: 'claseId' })
  clase?: Clase; // <- con ? por claridad en TypeScript
}
