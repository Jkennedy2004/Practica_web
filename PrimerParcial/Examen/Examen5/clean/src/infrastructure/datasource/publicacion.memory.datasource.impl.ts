import { PublicacionEntity } from '../../domain/entities/publicacion.entity';

export class PublicacionMemoryDataSource {
  private publicaciones: any[] = [
    {
      id: '1',
      titulo: 'Inteligencia Artificial en Educación',
      autores: ['Dr. Juan Pérez', 'Dra. Marta Gómez'],
      fechaPublicacion: '2024-03-15',
      journal: 'Revista Científica FCVT',
      tipoPublicacion: 'Artículo',
      area: 'Educación',
      facultad: 'FCVT'
    },
    {
      id: '2',
      titulo: 'Blockchain y Seguridad',
      autores: ['Dr. Laura Díaz'],
      fechaPublicacion: '2023-11-02',
      journal: 'Journal of Blockchain',
      tipoPublicacion: 'Ponencia',
      area: 'Informática',
      facultad: 'FCEFyN'
    }
  ];

  async getAll(): Promise<PublicacionEntity[]> {
    return this.publicaciones.map(p => PublicacionEntity.fromObject(p));
  }

  async getById(id: string): Promise<PublicacionEntity | null> {
    const result = this.publicaciones.find(p => p.id === id);
    return result ? PublicacionEntity.fromObject(result) : null;
  }
}
