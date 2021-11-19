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
        name: 'Felipe',
        age: 23,
      },
      {
        name: 'Carito',
        age: 21,
      },
    ]);
  }
});


// Método POST
router.post("/", (req,res) =>{
  const body = req.body;

  res.json({
    message:"Created",
    body
  })
})

// Método DELETE
router.delete("/:id", (req,res) =>{

  const {id} = req.params;

  res.json({
    message:"Deleted",
    id

  })
})

// Método PUT
router.put("/:id", (req,res) => {
  const body = req.body;
  const {id} = req.params;
  res.json({
    message:"Updated",
    body,
    id
  })
})

//Método PATCH
router.patch("/:id", (req,res) =>{
  const {id} = req.params;
  const body = req.body;

  res.json({
    body,
    id
  })
})

module.exports = router;
