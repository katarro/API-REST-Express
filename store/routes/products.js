const express = require("express");
const faker = require("faker");
const router = express.Router();

//          /products
router.get("/", (req, res) => {
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
router.get("/:id", (req, res) => {
  // DESESTRUCTURACION
  const { id } = req.params;

  res.json({
    id,
    name: "Prodcut 1",
    price: 1000,
  });
});

module.exports = router;
