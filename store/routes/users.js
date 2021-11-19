const express = require('express');
const router = express.Router();
const UsersService = require('../services/users');
const service = new UsersService();

// GET: PARAMETROS query (DINAMICOS)
router.get('/', (req, res) => {
  // limit y offset son OPCIONALES
  const { limit, offset } = req.query;
  const users = service.find(limit, offset);
  res.json(users);
});

// Método GET
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.finOne(id);
  res.json(user);
});

// Método POST
router.post('/', (req, res) => {
  const body = req.body;

  const NewUser = service.create(body);
  res.status(201).json(NewUser);
});

// Método DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  service.delete(id);
  const user = service.finOne(id);
  res.json(user);
});

// Método PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

//Método PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);

  res.status(201).json(user);
});

module.exports = router;
