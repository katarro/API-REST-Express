const express = require('express');
const router = express.Router();

// Método GET de categories
router.get('/', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categoryId,
      category: 'Terror',
      movies: ['La llorona', 'El cuco', 'La novia fe'],
    },
    {
      categoryId,
      category: 'Accion',
      movies: ['Carito vs Pipe', 'Aliens vs depredador', 'Matrix'],
    },
    {
      categoryId,
      category: 'Suspenso',
      movies: ['El viejo del saco', 'Los fantasmas', 'El fantasma de la novia'],
    },
  ]);
});

//Método GET de Movies
router.get('/:movies', (req, res) => {
  res.json({
    movies: [
      'La llorona',
      'El cuco',
      'La novia fe',
      'Carito vs Pipe',
      'Aliens vs depredador',
      'Matrix',
      'El viejo del saco',
      'Los fantasmas',
      'El fantasma de la novia',
    ],
  });
});

// Método POST
router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'Created',
    body,
  });
});

//Método DELETE
router.delete("/:id", (req,res)=>{
  const {id} = req.params;

  res.json({
    message:"Deleted",
    id

  })
})

// Método PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Updated',
    id,
    body,
  });
});

//Método PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Updeted',
    id,
    body,
  });
});

module.exports = router;
