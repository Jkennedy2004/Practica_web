import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity()
  export class InventarioProducto {
    @PrimaryGeneratedColumn()
    id_inventario!: number;
  
    @Column()
    id_producto!: number; // FK hacia Producto del módulo 1
  
    @Column()
    cantidad_disponible!: number;
  
    @Column()
    fecha_entrada!: Date;
  
    @Column()
    fecha_vencimiento!: Date;
  
    @Column()
    estado!: string; // en_uso, vencido, retirado, etc.
  }
  