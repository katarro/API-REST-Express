const faker = require('faker');
const boom = require('@hapi/boom');
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
        description: faker.random.word(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  find() {
    return this.categories;
  }
  findOne(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    const category = this.categories[index];
    if (!category) {
      throw boom.notFound('Category Not Found');
    }
    if (category.isBlock) {
      throw boom.conflict('Category is Block');
    }
    return category;
  }
  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('Category Not Found');
    }
    if (this.categories[index].isBlock) {
      throw boom.conflict('Category is Block');
    }
    const category = this.categories[index];

    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }
  create(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('Category Not Found');
    }
    if (this.categories.isBlock) {
      throw boom.conflict('Category is Block');
    }
    return this.categories.filter((item) => item.id !== id);
  }
}

module.exports = CategoriesServices;
