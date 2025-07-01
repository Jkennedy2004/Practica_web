// ofertaReducida.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OfertaReducida {
  @PrimaryGeneratedColumn()
  id_oferta!: number;

  @Column('float')
  descuento_aplicado!: number;

  @Column()
  fecha_inicio!: Date;

  @Column()
  fecha_fin!: Date;

  @Column()
  stock_disponible!: number;

  @Column()
  activa!: boolean;

  @Column()
  id_producto!: number; 
}
