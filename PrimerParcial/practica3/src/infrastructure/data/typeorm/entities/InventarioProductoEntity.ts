import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('inventario_productos')
export class InventarioProductoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  productoId!: string;

  @Column()
  nombreProducto!: string;

  @Column('int')
  cantidad!: number;

  @Column('int')
  cantidadMinima!: number;

  @Column()
  ubicacion!: string;

  @CreateDateColumn()
  fechaIngreso!: Date;

  @UpdateDateColumn()
  fechaUltimaActualizacion!: Date;

  @Column({
    type: 'enum',
    enum: ['DISPONIBLE', 'AGOTADO', 'STOCK_BAJO'],
    default: 'DISPONIBLE'
  })
  estado!: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO';
}