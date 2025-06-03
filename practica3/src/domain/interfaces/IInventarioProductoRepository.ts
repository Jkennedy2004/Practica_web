import { InventarioProducto } from '../entities/inventarioProducto';

export interface IInventarioProductoRepository {
  save(inventario: InventarioProducto): Promise<InventarioProducto>;
  findById(id: string): Promise<InventarioProducto | null>;
  findByProductoId(productoId: string): Promise<InventarioProducto | null>;
  findAll(): Promise<InventarioProducto[]>;
  findByEstado(estado: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO'): Promise<InventarioProducto[]>;
  findByUbicacion(ubicacion: string): Promise<InventarioProducto[]>;
  update(id: string, inventario: Partial<InventarioProducto>): Promise<InventarioProducto | null>;
  delete(id: string): Promise<boolean>;
}