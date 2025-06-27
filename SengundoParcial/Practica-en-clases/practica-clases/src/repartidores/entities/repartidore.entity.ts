import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('repartidores')

export class Repartidore {
    @PrimaryGeneratedColumn()

    @Column()
    id: number;
    @Column()
    nombre: string; 
    @Column()        
    apellido: string;
    @Column()
    edad: number;
    @Column({nullable: true})
    nacionalidad: string;
    @Column({default: 'activo'})
    estado: string
}

