// ========================================
// INTERFACES DEL SISTEMA
// ========================================

export interface Entrega {
    id: number;
    direccionDestino: string;
    fechaEntrega: Date;
    estado: 'pendiente' | 'en_curso' | 'entregada' | 'cancelada';
    repartidorId: number;
    tiempoEstimado: number; // minutos
    valor: number;
}

export interface Repartidor {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    vehiculo: 'moto' | 'bicicleta' | 'auto';
    disponible: boolean;
    calificacion: number;
}

export interface RutaEntrega {
    id: number;
    nombre: string;
    distanciaKm: number;
    tiempoPromedio: number; // minutos
    dificultad: 'facil' | 'media' | 'dificil';
    activa: boolean;
}