// eslint-disable-next-line no-console
const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva Ruta');
});

app.get('/products', (req, res) => {
  const products = []
  const {size} = req.query // endPoint size
  const limit = size || 10;// si viene, se le asigna size, sino 10
    //Estamos agregando prodcutos random para probar
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    })

  }
  res.json(products);
});


// LOS ENDPONITS ESPECIFICOS DEBEN IR ANTES QUE LOS DINAMICOS, PARA EVITAR CHOQUE DE RUTAS
app.get("/products/filter", (req,res)=>{
  res.send("Soy un filter")
})

// LLAMADA DE UN PRODUCTO.     CALL BACK
app.get('/products/:id', (req, res) => {
  // DESESTRUCTURACION
  const { id } = req.params;

  res.json({
    id,
    name: 'Prodcut 1',
    price: 1000,
  });
});



// Estamos respondiendo a la PETICION de los parametros por URL
app.get('/categories/:categoryId/:products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

// PETICION CATEGORIAS
app.get('/categories', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categoryId,
      category: 'Food',
      products: [],
    },
    {
      categoryId,
      category: 'Games',
      products: [],
    },
    {
      categoryId,
      category: 'clothes',
      products: [],
    },
  ]);
});

// PETICION DE USUARIOS
app.get('/users/', (req, res) => {
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
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ' + port);
});

// GET: PARAMETROS query (DINAMICOS)

app.get('/users2', (req, res) => {
  // limit y offset son OPCIONALES
  const { limit, offset } = req.query;
  // Se hace la validacion, porque son opcionales
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});
