import { Entrega, Repartidor, RutaEntrega } from '../interfaces';

// ========================================
// FUNCIONES CRUD
// ========================================
export function crearEntrega(
    id: number, 
    direccion: string, 
    repartidorId: number, 
    valor: number
): Entrega {
    return {
        id,
        direccionDestino: direccion,
        fechaEntrega: new Date(),
        estado: 'pendiente',
        repartidorId,
        tiempoEstimado: 30,
        valor
    };
}

export function mostrarEntrega(entrega: Entrega): void {
    console.log(`
        Entrega #${entrega.id}
        Destino: ${entrega.direccionDestino}
        Estado: ${entrega.estado}
        Valor: $${entrega.valor}
        Tiempo estimado: ${entrega.tiempoEstimado} min
    `);
}

export function crearRepartidor(
    id: number, 
    nombre: string, 
    apellido: string, 
    telefono: string,
    vehiculo: 'moto' | 'bicicleta' | 'auto'
): Repartidor {
    return {
        id,
        nombre,
        apellido,
        telefono,
        vehiculo,
        disponible: true,
        calificacion: 5.0
    };
}

export function mostrarRepartidor(repartidor: Repartidor): void {
    console.log(`
        Repartidor: ${repartidor.nombre} ${repartidor.apellido}
        Teléfono: ${repartidor.telefono}
        Vehículo: ${repartidor.vehiculo}
        Disponible: ${repartidor.disponible ? 'Sí' : 'No'}
        Calificación: ${repartidor.calificacion}/5
    `);
}

// ========================================
// FUNCIONES CON SPREAD Y REST
// ========================================
export function registrarEntregas(...entregas: Entrega[]): void {
    console.log(`Registrando ${entregas.length} entregas:`);
    entregas.forEach(entrega => {
        console.log(`- Entrega #${entrega.id} a ${entrega.direccionDestino}`);
    });
}

export function asignarRepartidores(...repartidores: Repartidor[]): void {
    console.log(`Asignando ${repartidores.length} repartidores:`);
    repartidores.forEach(repartidor => {
        console.log(`- ${repartidor.nombre} ${repartidor.apellido} (${repartidor.vehiculo})`);
    });
}

// ========================================
// FUNCIONES CON CALLBACKS
// ========================================
export function procesarEntrega(entrega: Entrega, callback: (entrega: Entrega) => void): void {
    console.log(`Procesando entrega #${entrega.id}...`);
    callback(entrega);
}

export function notificarEntrega(entrega: Entrega): void {
    console.log(`📱 Notificación: Entrega #${entrega.id} está ${entrega.estado}`);
}

export function actualizarEstado(entrega: Entrega): void {
    entrega.estado = 'en_curso';
    console.log(`✅ Estado actualizado: Entrega #${entrega.id} ahora está en curso`);
}

// ========================================
// FUNCIONES CON PROMISES
// ========================================
export function guardarEntrega(entrega: Entrega): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (entrega.valor > 0) {
                resolve(`✅ Entrega #${entrega.id} guardada exitosamente en la base de datos`);
            } else {
                reject(`❌ Error: Valor inválido para la entrega #${entrega.id}`);
            }
        }, 2000);
    });
}

export function calcularRuta(origen: string, destino: string): Promise<RutaEntrega> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const rutaCalculada: RutaEntrega = {
                id: Date.now(),
                nombre: `${origen} → ${destino}`,
                distanciaKm: Math.random() * 20 + 5,
                tiempoPromedio: Math.floor(Math.random() * 40 + 15),
                dificultad: 'media',
                activa: true
            };
            resolve(rutaCalculada);
        }, 1500);
    });
}

// ========================================
// FUNCIONES ASYNC/AWAIT
// ========================================
export async function procesarNuevaEntrega(entrega: Entrega): Promise<void> {
    try {
        console.log(`🚀 Iniciando procesamiento de entrega #${entrega.id}`);
        
        const mensajeGuardado = await guardarEntrega(entrega);
        console.log(mensajeGuardado);
        
        const ruta = await calcularRuta("Centro de distribución", entrega.direccionDestino);
        console.log(`📍 Ruta calculada: ${ruta.nombre}`);
        console.log(`   Distancia: ${ruta.distanciaKm.toFixed(1)} km`);
        console.log(`   Tiempo estimado: ${ruta.tiempoPromedio} minutos`);
        
        console.log(`✅ Procesamiento completado para entrega #${entrega.id}`);
        
    } catch (error) {
        console.error(`❌ Error procesando entrega: ${error}`);
    }
}

export async function generarReporteEntregas(entregas: Entrega[]): Promise<void> {
    console.log("\n📊 GENERANDO REPORTE DE ENTREGAS");
    console.log("================================");
    
    for (const entrega of entregas) {
        try {
            await procesarNuevaEntrega(entrega);
            console.log("--------------------------------");
        } catch (error) {
            console.error(`Error con entrega #${entrega.id}: ${error}`);
        }
    }
    
        console.log("🏁 Reporte completado\n");
    }