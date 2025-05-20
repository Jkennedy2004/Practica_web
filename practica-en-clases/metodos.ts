import { OfertaReducida } from './modulo-oferta-logistica/ofertaReducida';
import { AppDataSource } from './data-source';

const insertarOferta = async (
  descuento: number,
  inicio: Date,
  fin: Date,
  stock: number,
  activa: boolean,
  id_producto: number
) => {
  const nuevaOferta = new OfertaReducida();
  nuevaOferta.descuento_aplicado = descuento;
  nuevaOferta.fecha_inicio = inicio;
  nuevaOferta.fecha_fin = fin;
  nuevaOferta.stock_disponible = stock;
  nuevaOferta.activa = activa;
  nuevaOferta.id_producto = id_producto;

  return await AppDataSource.manager.save(nuevaOferta);
};

const consultarOfertas = async () => {
  return await AppDataSource.manager.find(OfertaReducida);
};

const consultarOfertaPorId = async (id: number) => {
  return await AppDataSource.manager.findOne(OfertaReducida, {
    where: { id_oferta: id },
  });
};

const modificarOferta = async (
  id: number,
  descuento: number,
  inicio: Date,
  fin: Date,
  stock: number,
  activa: boolean,
  id_producto: number
) => {
  const oferta = await consultarOfertaPorId(id);
  if (oferta) {
    oferta.descuento_aplicado = descuento;
    oferta.fecha_inicio = inicio;
    oferta.fecha_fin = fin;
    oferta.stock_disponible = stock;
    oferta.activa = activa;
    oferta.id_producto = id_producto;

    return await AppDataSource.manager.save(oferta);
  }
  return null;
};

const eliminarOferta = async (id: number) => {
  const oferta = await consultarOfertaPorId(id);
  if (oferta) {
    return await AppDataSource.manager.remove(oferta);
  }
  return null;
};

// Exportar los métodos
export {
  insertarOferta,
  consultarOfertas,
  consultarOfertaPorId,
  modificarOferta,
  eliminarOferta,
};
