import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './infrastructure/data/database/typeorm-config';
import { connectMongoDB } from './infrastructure/data/database/mongoose-config';
import { inventarioProductoRoutes } from './presentation/routes/inventarioProductoRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/inventario', inventarioProductoRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Initialize databases and start server
const startServer = async () => {
  try {
    // Choose your database strategy
    const useTypeORM = process.env.USE_TYPEORM === 'true';
    
    if (useTypeORM) {
      await initializeDatabase();
      console.log('Using TypeORM with PostgreSQL');
    } else {
      await connectMongoDB();
      console.log('Using Mongoose with MongoDB');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 API Documentation available at http://localhost:${PORT}/api/inventario`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;