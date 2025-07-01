import { AutorEntity } from './autor.entity';
import { FacultadEntity } from './facultad.entitiy';
import { AreaEntity } from './area.entity';
import { JournalEntity } from './journal.entity'; 

export interface PublicacionEntity {
  id: string;
  titulo: string;
  autores: AutorEntity[]; // muchos a muchos
  fechaPublicacion: Date;
  tipoPublicacion: 'articulo' | 'libro' | 'ponencia';
  journal: JournalEntity; // muchos a uno
  area: AreaEntity;       // muchos a uno
  facultad: FacultadEntity; // muchos a uno
}
