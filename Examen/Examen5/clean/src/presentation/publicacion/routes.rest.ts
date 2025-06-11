import { Router } from 'express';
import fetch from 'node-fetch'; // o axios

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const response = await fetch('https://api.example.com/publicaciones');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching publicaciones from REST API' });
  }
});

export default router;
