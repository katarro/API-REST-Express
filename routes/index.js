const express = require("express")
const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');
// Exportamos los modulos

function routerApi(app) {

  // Ruta Padre
  const router = express.Router();
  app.use("/api/v1",router);

  //Nombre de la url
  router.use('/products', productsRouter);
  router.use('/products/:id', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/categories/:categoryId/:products/:productId', categoriesRouter);
}

module.exports = routerApi;
