import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  export class RutaEntrega {
    @PrimaryGeneratedColumn()
    id_ruta!: number;
  
    @Column()
    direccion_origen!: string;
  
    @Column()
    direccion_destino!: string;
  
    @Column('float')
    distancia_km!: number;
  
    @Column()
    tiempo_estimado_min!: number;
  
    @Column()
    id_pedido!: number; // FK hacia Pedido del módulo 1
  
    @Column()
    id_repartidor!: number; // FK hacia Repartidor
  }
  