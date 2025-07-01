import { DataSource } from 'typeorm';
import { OfertaReducida } from './modulo-oferta-logistica/ofertaReducida';
import { InventarioProducto } from './modulo-oferta-logistica/inventraioProducto';
import { RutaEntrega } from './modulo-oferta-logistica/rutaEntrega';
import { Repartidor } from './modulo-oferta-logistica/repartidor';
import { ReporteLogistico } from './modulo-oferta-logistica/entrega';

export const AppDataSource = new DataSource({
  type: 'postgres', // o "mysql" si usas MySQL
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'practica_backend',
  synchronize: true, // solo para desarrollo, NO en producción
  logging: true,
  entities: [
    OfertaReducida,
    InventarioProducto,
    RutaEntrega,
    Repartidor,
    ReporteLogistico,
  ],
});
