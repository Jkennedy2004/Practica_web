import { Repository } from 'typeorm';
import { InventarioProducto } from '../../../../domain/entities/InventarioProducto';
import { IInventarioProductoRepository } from '../../../../domain/interfaces/IInventarioProductoRepository';
import { InventarioProductoEntity } from '../entities/InventarioProductoEntity';
import { AppDataSource } from '../../../database/typeorm-config';

export class TypeORMInventarioProductoRepository implements IInventarioProductoRepository {
  private repository: Repository<InventarioProductoEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(InventarioProductoEntity);
  }

  async save(inventario: InventarioProducto): Promise<InventarioProducto> {
    const inventarioEntity = this.repository.create({
      id: inventario.id,
      productoId: inventario.productoId,
      nombreProducto: inventario.nombreProducto,
      cantidad: inventario.cantidad,
      cantidadMinima: inventario.cantidadMinima,
      ubicacion: inventario.ubicacion,
      fechaIngreso: inventario.fechaIngreso,
      fechaUltimaActualizacion: inventario.fechaUltimaActualizacion,
      estado: inventario.estado
    });

    const savedEntity = await this.repository.save(inventarioEntity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<InventarioProducto | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByProductoId(productoId: string): Promise<InventarioProducto | null> {
    const entity = await this.repository.findOne({ where: { productoId } });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<InventarioProducto[]> {
    const entities = await this.repository.find();
    return entities.map(entity => this.toDomain(entity));
  }

  async findByEstado(estado: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO'): Promise<InventarioProducto[]> {
    const entities = await this.repository.find({ where: { estado } });
    return entities.map(entity => this.toDomain(entity));
  }

  async findByUbicacion(ubicacion: string): Promise<InventarioProducto[]> {
    const entities = await this.repository.find({ where: { ubicacion } });
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, inventarioData: Partial<InventarioProducto>): Promise<InventarioProducto | null> {
    await this.repository.update(id, inventarioData);
    return this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected! > 0;
  }

  private toDomain(entity: InventarioProductoEntity): InventarioProducto {
    return new InventarioProducto(
      entity.id,
      entity.productoId,
      entity.nombreProducto,
      entity.cantidad,
      entity.cantidadMinima,
      entity.ubicacion,
      entity.fechaIngreso,
      entity.fechaUltimaActualizacion,
      entity.estado
    );
  }
}