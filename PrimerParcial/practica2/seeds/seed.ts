import { AppDataSource } from '../data-source';
import { OfertaReducida } from '../modulo-oferta-logistica/ofertaReducida';

const seedOfertaReducida = async () => {
  await AppDataSource.initialize();

  const ofertaRepo = AppDataSource.getRepository(OfertaReducida);

  const ofertas = [
    {
      descuento_aplicado: 20,
      fecha_inicio: new Date(),
      fecha_fin: new Date(Date.now() + 86400000),
      stock_disponible: 10,
      activa: true,
      id_producto: 1,
    },
    {
      descuento_aplicado: 15,
      fecha_inicio: new Date(),
      fecha_fin: new Date(Date.now() + 172800000),
      stock_disponible: 5,
      activa: true,
      id_producto: 2,
    },
    {
      descuento_aplicado: 30,
      fecha_inicio: new Date(),
      fecha_fin: new Date(Date.now() + 259200000),
      stock_disponible: 8,
      activa: false,
      id_producto: 3,
    },
    {
      descuento_aplicado: 10,
      fecha_inicio: new Date(),
      fecha_fin: new Date(Date.now() + 3600000),
      stock_disponible: 20,
      activa: true,
      id_producto: 4,
    },
    {
      descuento_aplicado: 5,
      fecha_inicio: new Date(),
      fecha_fin: new Date(Date.now() + 10800000),
      stock_disponible: 12,
      activa: true,
      id_producto: 5,
    },
  ];

  await ofertaRepo.save(ofertas);

  console.log('✅ Seeds de OfertaReducida insertados correctamente');
  await AppDataSource.destroy();
};

seedOfertaReducida().catch((error) => {
  console.error('❌ Error insertando seeds:', error);
});
