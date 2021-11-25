// Se deben definir despues del Routing
// Debe poseer los 4 parametros
function logErrors(error, req, res, next) {
  console.log(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack, // Saber en donde ocurrió
  });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload); // Corta el middleware
  }
  next(error);
}

module.exports = { logErrors, errorHandler,boomErrorHandler };
