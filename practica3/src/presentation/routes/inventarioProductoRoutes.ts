import { Router } from 'express';
import { InventarioProductoController } from '../controllers/InventarioProductoController';
import { InventarioProductoService } from '../../application/services/InventarioProductoService';
import { TypeORMInventarioProductoRepository } from '../../infrastructure/data/typeorm/repositories/TypeORMInventarioProductoRepository';
import { MongooseInventarioProductoRepository } from '../../infrastructure/data/mongoose/repositories/MongooseInventarioProductoRepository';

const router = Router();