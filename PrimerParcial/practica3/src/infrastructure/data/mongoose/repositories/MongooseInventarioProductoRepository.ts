import { InventarioProducto } from '../../../../domain/entities/inventarioProducto';
import { IInventarioProductoRepository } from '../../../../domain/interfaces/IInventarioProductoRepository';
import { InventarioProductoModel } from '../schemas/InventarioProductoSchema';

export class MongooseInventarioProductoRepository implements IInventarioProductoRepository {
  async save(inventario: InventarioProducto): Promise<InventarioProducto> {
    const inventarioDoc = new InventarioProductoModel({
      _id: inventario.id,
      productoId: inventario.productoId,
      nombreProducto: inventario.nombreProducto,
      cantidad: inventario.cantidad,
      cantidadMinima: inventario.cantidadMinima,
      ubicacion: inventario.ubicacion,
      fechaIngreso: inventario.fechaIngreso,
      fechaUltimaActualizacion: inventario.fechaUltimaActualizacion,
      estado: inventario.estado
    });

    const savedDoc = await inventarioDoc.save();
    return this.toDomain(savedDoc);
  }

  async findById(id: string): Promise<InventarioProducto | null> {
    const doc = await InventarioProductoModel.findById(id);
    return doc ? this.toDomain(doc) : null;
  }

  async findByProductoId(productoId: string): Promise<InventarioProducto | null> {
    const doc = await InventarioProductoModel.findOne({ productoId });
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<InventarioProducto[]> {
    const docs = await InventarioProductoModel.find();
    return docs.map(doc => this.toDomain(doc));
  }

  async findByEstado(estado: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO'): Promise<InventarioProducto[]> {
    const docs = await InventarioProductoModel.find({ estado });
    return docs.map(doc => this.toDomain(doc));
  }

  async findByUbicacion(ubicacion: string): Promise<InventarioProducto[]> {
    const docs = await InventarioProductoModel.find({ ubicacion });
    return docs.map(doc => this.toDomain(doc));
  }

  async update(id: string, inventarioData: Partial<InventarioProducto>): Promise<InventarioProducto | null> {
    const updatedDoc = await InventarioProductoModel.findByIdAndUpdate(
      id,
      { ...inventarioData, fechaUltimaActualizacion: new Date() },
      { new: true }
    );
    return updatedDoc ? this.toDomain(updatedDoc) : null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await InventarioProductoModel.findByIdAndDelete(id);
    return !!result;
  }

  private toDomain(doc: any): InventarioProducto {
    return new InventarioProducto(
      doc._id,
      doc.productoId,
      doc.nombreProducto,
      doc.cantidad,
      doc.cantidadMinima,
      doc.ubicacion,
      doc.fechaIngreso,
      doc.fechaUltimaActualizacion,
      doc.estado
    );
  }
}