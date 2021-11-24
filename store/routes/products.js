const express = require('express');
const ProdcutService = require('../services/products');
const services = new ProdcutService();
const router = express.Router();

// Método GET
router.get('/', async (req, res) => {
  const products = await services.find();
  res.status(201).json(products);
});

// Los EndPoints especificos deben ir antes que los dinamicos (query), para evitar choques de rutas.
// Método GET
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params; // DESESTRUCTURACION
    const product = await services.findOne(id); // Busca el id dentro del array de productos y devuelve el producto
    res.json(product);
  } catch (error) {
    next(error)
  }
});

// Envío Metodo POST
router.post('/', async (req, res) => {
  const body = req.body;

  const newProduct = await services.create(body);
  res.status(201).json(newProduct);
});

//Envío Método PATCH
router.patch('/:id', async (req, res,next) => {
  //Captura el contenido del POST
  try {
    const body = req.body;
    const { id } = req.params;
    const productUpdated = await services.update(id, body);
    res.status(201).json(productUpdated);
  } catch (error) {
    next(error)
  }
});

//Envío Método DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await services.delete(id);
  res.status(201).json(deleted);
});

module.exports = router;
