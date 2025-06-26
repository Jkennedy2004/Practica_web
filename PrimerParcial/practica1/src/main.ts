import { 
    companyName, 
    totalDeliveries, 
    activeDrivers, 
    entregas, 
    repartidores,
    entrega1,
    entrega2,
    repartidor1,
    repartidor2
} from './models/entities';

import {
    mostrarEntrega,
    mostrarRepartidor,
    procesarEntrega,
    notificarEntrega,
    actualizarEstado,
    registrarEntregas,
    asignarRepartidores,
    generarReporteEntregas,
    crearEntrega
} from './services/deliveryService';

import { Entrega, Repartidor } from './interfaces/index';

// ========================================
// FUNCIÓN PRINCIPAL CON ASYNC/AWAIT
// ========================================
async function main(): Promise<void> {
    console.log(`🚚 Bienvenido a ${companyName}`);
    console.log(`Total de entregas realizadas: ${totalDeliveries}`);
    console.log(`Repartidores activos: ${activeDrivers}`);
    console.log("================================\n");

    // Demostrar funciones básicas
    console.log("📦 ENTREGAS ACTUALES:");
    entregas.forEach(mostrarEntrega);

    console.log("\n👥 REPARTIDORES:");
    repartidores.forEach(mostrarRepartidor);

    // Demostrar SPREAD - Crear nuevas entregas
    const nuevaEntrega = crearEntrega(3, "La Mariscal, Quito", 101, 22.00);
    const todasLasEntregas: Entrega[] = [...entregas, nuevaEntrega];

    // Demostrar callbacks
    console.log("\n🔄 PROCESANDO ENTREGAS CON CALLBACKS:");
    procesarEntrega(entrega1, notificarEntrega);
    procesarEntrega(entrega2, actualizarEstado);

    // Demostrar REST
    console.log("\n📋 REGISTRANDO ENTREGAS (REST OPERATOR):");
    registrarEntregas(...todasLasEntregas);

    console.log("\n👨‍💼 ASIGNANDO REPARTIDORES (REST OPERATOR):");
    asignarRepartidores(repartidor1, repartidor2);

    // Demostrar async/await con promises
    console.log("\n⏳ PROCESAMIENTO ASÍNCRONO:");
    await generarReporteEntregas(entregas);
}

// Ejecutar la aplicación
main().catch(error => {
    console.error("❌ Error en la aplicación:", error);
});