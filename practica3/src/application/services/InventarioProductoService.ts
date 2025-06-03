import { AgregarStockUseCase } from '../use-cases/AgregarStockUseCase';
import { ConsultarInventarioUseCase } from '../use-cases/ConsultarInventarioUseCase';
import { ActualizarStockUseCase } from '../use-cases/ActualizarStockUseCase';
import { VerificarStockMinimoUseCase } from '../use-cases/VerificarStockMinimoUseCase';
import { IInventarioProductoRepository } from '../../domain/interfaces/IInventarioProductoRepository';
import { InventarioProducto } from '../../domain/entities/inventarioProducto';

export class InventarioProductoService {
  private readonly agregarStockUseCase: AgregarStockUseCase;
  private readonly consultarInventarioUseCase: ConsultarInventarioUseCase;
  private readonly actualizarStockUseCase: ActualizarStockUseCase;
  private readonly verificarStockMinimoUseCase: VerificarStockMinimoUseCase;
  private readonly inventarioRepository: IInventarioProductoRepository;

  constructor(inventarioRepository: IInventarioProductoRepository) {
    this.inventarioRepository = inventarioRepository;
    this.agregarStockUseCase = new AgregarStockUseCase(inventarioRepository);
    this.consultarInventarioUseCase = new ConsultarInventarioUseCase(inventarioRepository);
    this.actualizarStockUseCase = new ActualizarStockUseCase(inventarioRepository);
    this.verificarStockMinimoUseCase = new VerificarStockMinimoUseCase(inventarioRepository);
  }

  async crearInventario(
    productoId: string,
    nombreProducto: string,
    cantidad: number,
    cantidadMinima: number,
    ubicacion: string
  ): Promise<InventarioProducto> {
    const inventario = InventarioProducto.create(
      productoId,
      nombreProducto,
      cantidad,
      cantidadMinima,
      ubicacion
    );
    
    return await this.inventarioRepository.save(inventario);
  }

  async agregarStock(inventarioId: string, cantidad: number): Promise<InventarioProducto> {
    return await this.agregarStockUseCase.execute(inventarioId, cantidad);
  }

  async reducirStock(inventarioId: string, cantidad: number): Promise<InventarioProducto> {
    return await this.actualizarStockUseCase.reducirStock(inventarioId, cantidad);
  }

  async consultarInventario(id: string): Promise<InventarioProducto | null> {
    return await this.consultarInventarioUseCase.execute(id);
  }

  async consultarTodoInventario(): Promise<InventarioProducto[]> {
    return await this.consultarInventarioUseCase.executeAll();
  }

  async consultarPorProducto(productoId: string): Promise<InventarioProducto | null> {
    return await this.consultarInventarioUseCase.executeByProducto(productoId);
  }

  async consultarStockBajo(): Promise<InventarioProducto[]> {
    return await this.verificarStockMinimoUseCase.execute();
  }

  async consultarAgotados(): Promise<InventarioProducto[]> {
    return await this.verificarStockMinimoUseCase.executeAgotados();
  }

  async actualizarUbicacion(inventarioId: string, ubicacion: string): Promise<InventarioProducto> {
    return await this.actualizarStockUseCase.actualizarUbicacion(inventarioId, ubicacion);
  }
}