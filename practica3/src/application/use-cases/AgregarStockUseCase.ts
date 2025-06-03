import { InventarioProducto } from '../../domain/entities/inventarioProducto';
import { IInventarioProductoRepository } from '../../domain/interfaces/IInventarioProductoRepository';

export class AgregarStockUseCase {
  constructor(private inventarioRepository: IInventarioProductoRepository) {}

  async execute(inventarioId: string, cantidadAAgregar: number): Promise<InventarioProducto> {
    const inventario = await this.inventarioRepository.findById(inventarioId);
    if (!inventario) {
      throw new Error('Inventario no encontrado');
    }

    const inventarioActualizado = inventario.agregarStock(cantidadAAgregar);
    return await this.inventarioRepository.save(inventarioActualizado);
  }
}