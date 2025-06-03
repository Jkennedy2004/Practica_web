import express from 'express';

import { initializeDatabase } from './infrastructure/data/database/typeorm-config';
import { connectMongoDB } from './infrastructure/data/database/mongoose-config';


const app = express();
const PORT = process.env.PORT ?? 3000;