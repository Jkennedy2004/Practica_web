
import { InventarioProducto } from '../../domain/entities/inventarioProducto';
import { IInventarioProductoRepository } from '../../domain/interfaces/IInventarioProductoRepository';

export class ConsultarInventarioUseCase {
  constructor(private inventarioRepository: IInventarioProductoRepository) {}

  async execute(id: string): Promise<InventarioProducto | null> {
    return await this.inventarioRepository.findById(id);
  }

  async executeAll(): Promise<InventarioProducto[]> {
    return await this.inventarioRepository.findAll();
  }

  async executeByProducto(productoId: string): Promise<InventarioProducto | null> {
    return await this.inventarioRepository.findByProductoId(productoId);
  }

  async executeByEstado(estado: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO'): Promise<InventarioProducto[]> {
    return await this.inventarioRepository.findByEstado(estado);
  }
}