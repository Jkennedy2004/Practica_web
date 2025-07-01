import { FacultadEntity } from './facultad.entitiy';

export interface AutorEntity {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  afiliacion: FacultadEntity; // muchos a uno
}
