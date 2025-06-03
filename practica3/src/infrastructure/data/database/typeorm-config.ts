import { DataSource } from 'typeorm';
import { InventarioProductoEntity } from '../typeorm/entities/InventarioProductoEntity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'password',
  database: process.env.DB_NAME ?? 'inventario_db',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
  entities: [InventarioProductoEntity],
  migrations: [],
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log('Base de datos TypeORM inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar TypeORM:', error);
    throw error;
  }
};
