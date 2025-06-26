import { PublicacionRestDataSource } from '../../datasources/publicacion.rest.datasource';

export class GetPublicacionesRestUseCase {
  constructor(private readonly restDatasource: PublicacionRestDataSource) {}

  async execute() {
    return await this.restDatasource.getAll();
  }
}