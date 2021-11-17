const express =  require("express")
const router = express.Router()

// PETICION CATEGORIAS
router.get('/', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categoryId,
      category: 'Terror',
      movies: ["La llorona","El cuco","La novia fe"],
    },
    {
      categoryId,
      category: 'Accion',
      movies: ["Carito vs Pipe", "Aliens vs depredador","Matrix"],
    },
    {
      categoryId,
      category: 'Suspenso',
      movies: ["El viejo del saco","Los fantasmas","El fantasma de la novia"],
    },
  ]);
});
// Estamos respondiendo a la PETICION de los parametros por URL
router.get('/:categoryId/:products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
