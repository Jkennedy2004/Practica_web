import { Router } from 'express';
import { InventarioProductoController } from '../controllers/InventarioProductoController';
import { InventarioProductoService } from '../../application/services/InventarioProductoService';
import { TypeORMInventarioProductoRepository } from '../../infrastructure/data/typeorm/repositories/TypeORMInventarioProductoRepository';