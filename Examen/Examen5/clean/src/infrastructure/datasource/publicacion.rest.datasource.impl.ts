import { PublicacionEntity } from '../../domain/entities/publicacion.entity';
import { PublicacionRepository } from '../../domain/repositories/publicacion.repository';

export class PublicacionRestDataSource implements PublicacionRepository {
  private readonly baseUrl = 'https://api.example.com/publicaciones';

  async getAll(): Promise<PublicacionEntity[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch publicaciones');
    }
    const data = await response.json();
    return data;
  }

  async getById(id: string): Promise<PublicacionEntity | null> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error('Failed to fetch publicacion');
    }
    const data = await response.json();
    return data;
  }

  async create(publicacion: PublicacionEntity): Promise<PublicacionEntity> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(publicacion),
    });
    if (!response.ok) {
      throw new Error('Failed to create publicacion');
    }
    const data = await response.json();
    return data;
  }

  async delete(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete publicacion');
    }
  }

  // Optionally, you can implement update if needed
  // async update(id: string, publicacion: PublicacionEntity): Promise<PublicacionEntity> {
  //   const response = await fetch(`${this.baseUrl}/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(publicacion),
  //   });
  //   if (!response.ok) {
  //     throw new Error('Failed to update publicacion');
  //   }
  //   const data = await response.json();
  //   return data;
  // }
}
