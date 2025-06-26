import { InventarioProducto } from '../../domain/entities/inventarioProducto';
import { IInventarioProductoRepository } from '../../domain/interfaces/IInventarioProductoRepository';

export class VerificarStockMinimoUseCase {
  constructor(private inventarioRepository: IInventarioProductoRepository) {}

  async execute(): Promise<InventarioProducto[]> {
    return await this.inventarioRepository.findByEstado('STOCK_BAJO');
  }

  async executeAgotados(): Promise<InventarioProducto[]> {
    return await this.inventarioRepository.findByEstado('AGOTADO');
  }
}