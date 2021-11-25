const faker = require('faker');
const boom = require('@hapi/boom');
class ProdcutService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10; // si viene, se le asigna size, sino 10
    //Estamos agregando prodcutos random para probar
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }
  async findOne(id) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw boom.notFound('Product Not Found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is Block');
    }
    return product
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('Product Not Found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };

    return this.products[index];
  }
  async delete(id) {
    const index = this.products.indexOf((item) => item.id === id);

    if (index) {
      return this.products.filter((item) => item.id != id);
    } else {
      throw new Error('Product Not Found');
    }
  }
}

module.exports = ProdcutService;
