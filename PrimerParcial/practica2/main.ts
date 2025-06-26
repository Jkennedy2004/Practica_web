import 'reflect-metadata';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Base de datos conectada exitosamente');
    // Aquí podrías llamar seeds, iniciar tu API, etc.
  })
  .catch((error) => {
    console.error('❌ Error al conectar con la base de datos:', error);
  });
