export class InventarioProducto {
  constructor(
    public readonly id: string,
    public readonly productoId: string,
    public readonly nombreProducto: string,
    public readonly cantidad: number,
    public readonly cantidadMinima: number,
    public readonly ubicacion: string,
    public readonly fechaIngreso: Date,
    public readonly fechaUltimaActualizacion: Date,
    public readonly estado: 'DISPONIBLE' | 'AGOTADO' | 'STOCK_BAJO'
  ) {}

  static create(
    productoId: string,
    nombreProducto: string,
    cantidad: number,
    cantidadMinima: number,
    ubicacion: string
  ): InventarioProducto {
    const estado = cantidad === 0 ? 'AGOTADO' : 
                  cantidad <= cantidadMinima ? 'STOCK_BAJO' : 'DISPONIBLE';

    return new InventarioProducto(
      crypto.randomUUID(),
      productoId,
      nombreProducto,
      cantidad,
      cantidadMinima,
      ubicacion,
      new Date(),
      new Date(),
      estado
    );
  }

  agregarStock(cantidadAAgregar: number): InventarioProducto {
    if (cantidadAAgregar <= 0) {
      throw new Error('La cantidad a agregar debe ser mayor a 0');
    }

    const nuevaCantidad = this.cantidad + cantidadAAgregar;
    const nuevoEstado = nuevaCantidad <= this.cantidadMinima ? 'STOCK_BAJO' : 'DISPONIBLE';

    return new InventarioProducto(
      this.id,
      this.productoId,
      this.nombreProducto,
      nuevaCantidad,
      this.cantidadMinima,
      this.ubicacion,
      this.fechaIngreso,
      new Date(),
      nuevoEstado
    );
  }

  reducirStock(cantidadAReducir: number): InventarioProducto {
    if (cantidadAReducir <= 0) {
      throw new Error('La cantidad a reducir debe ser mayor a 0');
    }
    
    if (cantidadAReducir > this.cantidad) {
      throw new Error('Stock insuficiente');
    }

    const nuevaCantidad = this.cantidad - cantidadAReducir;
    const nuevoEstado = nuevaCantidad === 0 ? 'AGOTADO' : 
                       nuevaCantidad <= this.cantidadMinima ? 'STOCK_BAJO' : 'DISPONIBLE';

    return new InventarioProducto(
      this.id,
      this.productoId,
      this.nombreProducto,
      nuevaCantidad,
      this.cantidadMinima,
      this.ubicacion,
      this.fechaIngreso,
      new Date(),
      nuevoEstado
    );
  }

  actualizarUbicacion(nuevaUbicacion: string): InventarioProducto {
    return new InventarioProducto(
      this.id,
      this.productoId,
      this.nombreProducto,
      this.cantidad,
      this.cantidadMinima,
      nuevaUbicacion,
      this.fechaIngreso,
      new Date(),
      this.estado
    );
  }

  estaEnStockBajo(): boolean {
    return this.estado === 'STOCK_BAJO';
  }

  estaAgotado(): boolean {
    return this.estado === 'AGOTADO';
  }
}