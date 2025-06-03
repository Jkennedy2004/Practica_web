import { AppDataSource } from './data-source';
import {
  insertarOferta,
  consultarOfertas,
  consultarOfertaPorId,
  modificarOferta,
  eliminarOferta,
} from './metodos';

async function main() {
  await AppDataSource.initialize();
  console.log("✅ Base de datos conectada");

  const nueva = await insertarOferta(
    25,
    new Date(),
    new Date(Date.now() + 86400000),
    10,
    true,
    1
  );
  console.log("📌 Oferta insertada:", nueva);

  const todas = await consultarOfertas();
  console.log("📋 Todas las ofertas:", todas);

  const encontrada = await consultarOfertaPorId(nueva.id_oferta);
  console.log("🔍 Oferta por ID:", encontrada);

  const actualizada = await modificarOferta(
    nueva.id_oferta,
    30,
    nueva.fecha_inicio,
    nueva.fecha_fin,
    5,
    false,
    nueva.id_producto
  );
  console.log("✏️ Oferta modificada:", actualizada);

  const eliminada = await eliminarOferta(nueva.id_oferta);
  console.log("🗑️ Oferta eliminada:", eliminada);
}

main().catch((error) => {
  console.error("❌ Error durante ejecución:", error);
});


