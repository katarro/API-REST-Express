const productsRouter = require("./products");
const usersRouter = require("./users")
const categoriesRouter = require("./categories")
// Exportamos los modulos

function routerApi(app){
  //Nombre de la url
  app.use("/api/products",productsRouter);
  app.use("/api/products/:id",productsRouter);
  app.use("/api/users",usersRouter);
  app.use("/api/categories",categoriesRouter)
  app.use("/api/categories/:categoryId/:products/:productId",categoriesRouter)
}

module.exports = routerApi;
