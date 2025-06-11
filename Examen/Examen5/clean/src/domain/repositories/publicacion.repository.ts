// dominio/repositories/publicacion.repository.ts
import { PublicacionEntity } from '../entities/publicacion.entity';

export interface PublicacionRepository {
  getAll(): Promise<PublicacionEntity[]>;
  getById(id: string): Promise<PublicacionEntity | null>;
  create(publicacion: PublicacionEntity): Promise<PublicacionEntity>;
  delete(id: string): Promise<void>;
}
