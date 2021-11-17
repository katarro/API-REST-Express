const express = require('express');
const router = express.Router();

// GET: PARAMETROS query (DINAMICOS)
router.get('/', (req, res) => {
  // limit y offset son OPCIONALES
  const { limit, offset } = req.query;
  // Se hace la validacion, porque son opcionales
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    // Que los muestre todos
    res.json([
      {
        user: 'Felipe',
        age: 23,
      },
      {
        user: 'Carito',
        age: 21,
      },
    ]);
  }
});

module.exports = router;
