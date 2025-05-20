import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ReporteLogistico } from './reporteLogistico';

@Entity()
export class Repartidor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  telefono!: string;

  @OneToMany(() => ReporteLogistico, (reporte) => reporte.repartidor)
  reportes!: ReporteLogistico[];
}
