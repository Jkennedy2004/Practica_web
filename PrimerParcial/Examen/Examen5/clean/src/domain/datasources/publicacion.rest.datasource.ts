import fetch from 'node-fetch';
import { PublicacionEntity } from '../entities/publicacion.entity';

export class PublicacionRestDataSource {
  constructor(private readonly baseUrl: string) {}

  async getAll(): Promise<PublicacionEntity[]> {
    const response = await fetch(`${this.baseUrl}/api/publicaciones`);
    if (!response.ok) {
      throw new Error('Error fetching publicaciones from REST API');
    }
    const data = await response.json() as any[];
    return data.map((obj: any) => PublicacionEntity.fromObject(obj));
  }
}
