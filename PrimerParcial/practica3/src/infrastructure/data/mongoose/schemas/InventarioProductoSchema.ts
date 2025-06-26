import { Schema, model } from 'mongoose';

const inventarioProductoSchema = new Schema({
  _id: { type: String, required: true },
  productoId: { type: String, required: true },
  nombreProducto: { type: String, required: true },
  cantidad: { type: Number, required: true, min: 0 },
  cantidadMinima: { type: Number, required: true, min: 0 },
  ubicacion: { type: String, required: true },
  fechaIngreso: { type: Date, default: Date.now },
  fechaUltimaActualizacion: { type: Date, default: Date.now },
  estado: {
    type: String,
    enum: ['DISPONIBLE', 'AGOTADO', 'STOCK_BAJO'],
    default: 'DISPONIBLE'
  }
});

export const InventarioProductoModel = model('InventarioProducto', inventarioProductoSchema);