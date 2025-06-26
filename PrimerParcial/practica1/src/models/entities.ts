import { Entrega, Repartidor, RutaEntrega } from '../interfaces/index';

// ========================================
// VARIABLES GLOBALES
// ========================================
export const companyName: string = "DeliveryFast";
export const totalDeliveries: number = 150;
export let activeDrivers: number = 25;
export const maxDeliveryTime: number = 45; // minutos
export let isOperational: boolean = true;

// ========================================
// OBJETOS LITERALES - DATOS DE EJEMPLO
// ========================================
export const entrega1: Entrega = {
    id: 1,
    direccionDestino: "Av. Amazonas N24-12",
    fechaEntrega: new Date('2025-05-06T14:30:00'),
    estado: 'pendiente',
    repartidorId: 101,
    tiempoEstimado: 30,
    valor: 25.50
};

export const entrega2: Entrega = {
    id: 2,
    direccionDestino: "Calle 10 de Agosto 455",
    fechaEntrega: new Date('2025-05-06T15:45:00'),
    estado: 'en_curso',
    repartidorId: 102,
    tiempoEstimado: 40,
    valor: 18.75
};

export const repartidor1: Repartidor = {
    id: 101,
    nombre: "Carlos",
    apellido: "Mendoza",
    telefono: "0998765432",
    vehiculo: 'moto',
    disponible: false,
    calificacion: 4.8
};

export const repartidor2: Repartidor = {
    id: 102,
    nombre: "María",
    apellido: "González",
    telefono: "0987654321",
    vehiculo: 'bicicleta',
    disponible: true,
    calificacion: 4.9
};

export const ruta1: RutaEntrega = {
    id: 1,
    nombre: "Centro Histórico",
    distanciaKm: 5.2,
    tiempoPromedio: 25,
    dificultad: 'media',
    activa: true
};

export const ruta2: RutaEntrega = {
    id: 2,
    nombre: "Norte Quito",
    distanciaKm: 12.8,
    tiempoPromedio: 45,
    dificultad: 'dificil',
    activa: true
};

// ========================================
// ARREGLOS DE OBJETOS
// ========================================
export const entregas: Entrega[] = [entrega1, entrega2];
export const repartidores: Repartidor[] = [repartidor1, repartidor2];
export const rutas: RutaEntrega[] = [ruta1, ruta2];