import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Repartidor } from './repartidor';

@Entity()
export class ReporteLogistico {
  @PrimaryGeneratedColumn()
  id_reporte!: number;

  @Column({ type: 'date' })
  fecha_reporte!: Date;

  @Column()
  total_entregas!: number;

  @Column()
  entregas_tarde!: number;

  @Column()
  productos_no_entregados!: number;

  @Column()
  observaciones!: string;

  @ManyToOne(() => Repartidor, (repartidor) => repartidor.reportes)
  @JoinColumn({ name: 'id_repartidor' }) // Este será el nombre de la columna FK
  repartidor!: Repartidor;
}
