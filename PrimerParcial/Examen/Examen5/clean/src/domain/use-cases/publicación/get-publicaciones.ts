// domain/use-cases/publicacion/get-publicaciones.ts
import { PublicacionRepository } from '../../repositories/publicacion.repository';

export class GetPublicaciones {
  constructor(private readonly repo: PublicacionRepository) {}

  execute() {
    return this.repo.getAll();
  }
}
