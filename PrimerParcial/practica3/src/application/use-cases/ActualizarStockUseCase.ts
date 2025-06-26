import { InventarioProducto } from '../../domain/entities/inventarioProducto';
import { IInventarioProductoRepository } from '../../domain/interfaces/IInventarioProductoRepository';

export class ActualizarStockUseCase {
  constructor(private inventarioRepository: IInventarioProductoRepository) {}

  async reducirStock(inventarioId: string, cantidadAReducir: number): Promise<InventarioProducto> {
    const inventario = await this.inventarioRepository.findById(inventarioId);
    if (!inventario) {
      throw new Error('Inventario no encontrado');
    }

    const inventarioActualizado = inventario.reducirStock(cantidadAReducir);
    return await this.inventarioRepository.save(inventarioActualizado);
  }

  async actualizarUbicacion(inventarioId: string, nuevaUbicacion: string): Promise<InventarioProducto> {
    const inventario = await this.inventarioRepository.findById(inventarioId);
    if (!inventario) {
      throw new Error('Inventario no encontrado');
    }

    const inventarioActualizado = inventario.actualizarUbicacion(nuevaUbicacion);
    return await this.inventarioRepository.save(inventarioActualizado);
  }
}