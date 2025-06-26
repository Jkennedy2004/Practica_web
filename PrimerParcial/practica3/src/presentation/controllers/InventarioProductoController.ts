import { Request, Response } from 'express';
import { InventarioProductoService } from '../../application/services/InventarioProductoService';

export class InventarioProductoController {
  constructor(private readonly inventarioService: InventarioProductoService) {}

  async crearInventario(req: Request, res: Response): Promise<void> {
    try {
      const { productoId, nombreProducto, cantidad, cantidadMinima, ubicacion } = req.body;
      
      if (!productoId || !nombreProducto || cantidad === undefined || cantidadMinima === undefined || !ubicacion) {
        res.status(400).json({ error: 'Todos los campos son requeridos' });
        return;
      }

      const inventario = await this.inventarioService.crearInventario(
        productoId, nombreProducto, cantidad, cantidadMinima, ubicacion
      );
      res.status(201).json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async agregarStock(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { cantidad } = req.body;
      
      if (!cantidad || cantidad <= 0) {
        res.status(400).json({ error: 'La cantidad debe ser mayor a 0' });
        return;
      }

      const inventario = await this.inventarioService.agregarStock(id, cantidad);
      res.json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async reducirStock(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { cantidad } = req.body;
      
      if (!cantidad || cantidad <= 0) {
        res.status(400).json({ error: 'La cantidad debe ser mayor a 0' });
        return;
      }

      const inventario = await this.inventarioService.reducirStock(id, cantidad);
      res.json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async consultarInventario(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const inventario = await this.inventarioService.consultarInventario(id);
      
      if (!inventario) {
        res.status(404).json({ error: 'Inventario no encontrado' });
        return;
      }

      res.json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async consultarTodoInventario(req: Request, res: Response): Promise<void> {
    try {
      const inventarios = await this.inventarioService.consultarTodoInventario();
      res.json(inventarios);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async consultarPorProducto(req: Request, res: Response): Promise<void> {
    try {
      const { productoId } = req.params;
      const inventario = await this.inventarioService.consultarPorProducto(productoId);
      
      if (!inventario) {
        res.status(404).json({ error: 'Inventario para este producto no encontrado' });
        return;
      }

      res.json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async consultarStockBajo(req: Request, res: Response): Promise<void> {
    try {
      const inventarios = await this.inventarioService.consultarStockBajo();
      res.json(inventarios);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async consultarAgotados(req: Request, res: Response): Promise<void> {
    try {
      const inventarios = await this.inventarioService.consultarAgotados();
      res.json(inventarios);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }

  async actualizarUbicacion(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { ubicacion } = req.body;
      
      if (!ubicacion) {
        res.status(400).json({ error: 'La ubicación es requerida' });
        return;
      }

      const inventario = await this.inventarioService.actualizarUbicacion(id, ubicacion);
      res.json(inventario);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocurrió un error desconocido' });
      }
    }
  }
}