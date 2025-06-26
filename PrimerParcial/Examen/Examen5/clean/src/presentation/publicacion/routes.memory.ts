import { Router } from 'express';

// Simulamos un datasource en memoria con un array de publicaciones
const publicaciones = [
  { id: 1, titulo: "Publicacion 1", autor: "Autor A", año: 2022 },
  { id: 2, titulo: "Publicacion 2", autor: "Autor B", año: 2023 },
];

// Creamos el router
const router = Router();

// Ruta GET para obtener todas las publicaciones
router.get('/', (req, res) => {
  res.json(publicaciones);
});

// Ruta GET para obtener una publicación por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const publicacion = publicaciones.find(pub => pub.id === id);
  
  if (!publicacion) {
    return res.status(404).json({ message: 'Publicacion no encontrada' });
  }
  
  res.json(publicacion);
});

// Ruta POST para agregar una nueva publicación
router.post('/', (req, res) => {
  const { titulo, autor, año } = req.body;
  const newPublicacion = {
    id: publicaciones.length + 1,
    titulo,
    autor,
    año,
  };
  publicaciones.push(newPublicacion);
  res.status(201).json(newPublicacion);
});

// Ruta PUT para actualizar una publicación existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = publicaciones.findIndex(pub => pub.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Publicacion no encontrada' });
  }

  const { titulo, autor, año } = req.body;
  publicaciones[index] = { id, titulo, autor, año };

  res.json(publicaciones[index]);
});

// Ruta DELETE para eliminar una publicación
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = publicaciones.findIndex(pub => pub.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Publicacion no encontrada' });
  }

  publicaciones.splice(index, 1);
  res.status(204).send();
});

export default router;
