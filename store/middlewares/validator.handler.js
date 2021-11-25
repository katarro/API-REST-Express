const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    // crea un middleWare de forma dinamica
    const data = req[property]; // recive infromacion dinamicamente
    const { error } = schema.validate(data, { abortEarly: false }); // valida la informacion y aborEarly, es para mostrar todos los error altiro(buena practica)

    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
