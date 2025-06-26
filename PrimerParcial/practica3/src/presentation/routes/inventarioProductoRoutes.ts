import { Router } from 'express';
import { InventarioProductoController } from '../controllers/InventarioProductoController';
import { InventarioProductoService } from '../../application/services/InventarioProductoService';
import { TypeORMInventarioProductoRepository } from '../../infrastructure/data/typeorm/repositories/TypeORMInventarioProductoRepository';
import { MongooseInventarioProductoRepository } from '../../infrastructure/data/mongoose/repositories/MongooseInventarioProductoRepository';

const router = Router();

// Factory function to create repository based on environment
const createRepository = () => {
  const useTypeORM = process.env.USE_TYPEORM === 'true';
  return useTypeORM 
    ? new TypeORMInventarioProductoRepository()
    : new MongooseInventarioProductoRepository();
};

// Dependency injection
const repository = createRepository();
const service = new InventarioProductoService(repository);
const controller = new InventarioProductoController(service);

// Routes
router.post('/', (req, res) => controller.crearInventario(req, res));
router.get('/', (req, res) => controller.consultarTodoInventario(req, res));
router.get('/stock-bajo', (req, res) => controller.consultarStockBajo(req, res));
router.get('/agotados', (req, res) => controller.consultarAgotados(req, res));
router.get('/:id', (req, res) => controller.consultarInventario(req, res));
router.get('/producto/:productoId', (req, res) => controller.consultarPorProducto(req, res));
router.put('/:id/agregar-stock', (req, res) => controller.agregarStock(req, res));
router.put('/:id/reducir-stock', (req, res) => controller.reducirStock(req, res));
router.put('/:id/ubicacion', (req, res) => controller.actualizarUbicacion(req, res));

export { router as inventarioProductoRoutes };