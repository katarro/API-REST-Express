const faker = require('faker');
class ProdcutService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit =  10; // si viene, se le asigna size, sino 10
    //Estamos agregando prodcutos random para probar
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find(item=>item.id == id)
  }

  create() {}
  update() {}
  delete() {}
}

module.exports = ProdcutService;
