const express = require('express');
const faker = require('faker');
const router = express.Router();

//          /products
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query; // endPoint size
  const limit = size || 10; // si viene, se le asigna size, sino 10
  //Estamos agregando prodcutos random para probar
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// LOS ENDPONITS ESPECIFICOS DEBEN IR ANTES QUE LOS DINAMICOS, PARA EVITAR CHOQUE DE RUTAS

// LLAMADA DE UN PRODUCTO.     CALL BACK
router.get('/:id', (req, res) => {
  // DESESTRUCTURACION
  const { id } = req.params;

  res.json({
    id,
    name: 'Prodcut 1',
    price: 1000,
  });
});

// Envío Metodo POST
router.post('/', (req, res) => {
  //Captura el contenido del POST
  const body = req.body;
  res.json({
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
