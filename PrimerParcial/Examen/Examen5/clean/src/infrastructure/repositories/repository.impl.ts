// infrastructure/repositories/publicacion.repository.impl.ts
import { PublicacionRepository } from '../../domain/repositories/publicacion.repository';
import { PublicacionEntity } from '../../domain/entities/publicacion.entity';

export class PublicacionMemoryRepository implements PublicacionRepository {
    private publicaciones: PublicacionEntity[] = [];

    async getById(id: string): Promise<PublicacionEntity | null> {
        const publicacion = this.publicaciones.find(p => p.id === id);
        return publicacion || null;
    }

    async create(publicacion: PublicacionEntity): Promise<PublicacionEntity> {
        this.publicaciones.push(publicacion);
        return publicacion;
    }

    async delete(id: string): Promise<void> {
        this.publicaciones = this.publicaciones.filter(p => p.id !== id);
    }

    async getAll(): Promise<PublicacionEntity[]> {
        return this.publicaciones;
    }
}
