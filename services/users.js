const faker = require('faker');
const boom = require('@hapi/boom');
class UsersService {
  constructor() {
    this.users = [];
    this.generate(); // Iniciamos altiro
  }
  generate() {
    const limit = 50;
    //Estamos agregando users random para probar
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        age: faker.datatype.number(90),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  create(data) {
    //Los datos los define el Cliente
    const NewUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(NewUser);
    return NewUser;
  }
  find(inf, sup) {
    const limit = inf || 0;
    const offset = sup || this.users.length;

    return this.users.slice(limit, offset);
  }
  finOne(id) {
    const user = this.users.find((item) => item.id == id);

    if (!user) {
      throw boom.notFound('User Not Found');
    }
    if (user.isBlock) {
      throw boom.conflict('Product is Block');
    }
    return user;
  }
  delete(id) {
    /*
      1) Encontrar el index del objeto
      2) Validar si existe en el array
      3) Eliminarlo

    */
    const index = this.users.indexOf((item) => item.id === id);

    if (index) {
      return this.users.filter((item) => item.id != id);
    }
    throw boom.notFound('User Not Found');
  }
  update(id, changes) {
    /*
    1) Encontrar el index del objeto
    2) Validar si existe en el array
    3) Guardar en una constante el objeto a actualizar
    4) Hacer los cambios
    */

    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound('User Not Found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user, // Mantenemos lo antiguo
      ...changes, // Aplicamos los cambios
    };

    return this.users[index];
  }
}

module.exports = UsersService;
