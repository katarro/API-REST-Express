const faker = require('faker');
class CategoriesServices {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 3;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        gender: faker.name.title(),
      });
    }
  }
  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((item) => item.id == id);
  }
  update() {}
  create() {}
  delete() {}
}

module.exports = CategoriesServices;
