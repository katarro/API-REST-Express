const express = require('express');
const ProdcutService = require('../services/products');
const services = new ProdcutService();
const router = express.Router();

// Método GET
router.get('/', (req, res) => {
  const products = services.find();
  res.json(products);
});

// Los EndPoints especificos deben ir antes que los dinamicos (query), para evitar choques de rutas.
// Método GET
router.get('/:id', (req, res) => {
  const { id } = req.params; // DESESTRUCTURACION
  const product = services.findOne(id); // Busca el id dentro del array de productos y devuelve el producto
  res.json(product);
});

// Envío Metodo POST
router.post('/', (req, res) => {
  //Captura el contenido del POST
  const body = req.body;
  res.status(201).json({
    message: 'crated',
    data: body,
  });
});

//Envío Método PUT
router.put('/:id', (req, res) => {
  //Captura el contenido del POST
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

//Envío Método PATCH
router.patch('/:id', (req, res) => {
  //Captura el contenido del POST
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

//Envío Método DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
