const { json } = require('express');
const express = require('express');
const router = express.Router();
const CategoriesServices = require('../services/categories');
const service = new CategoriesServices();

// Método GET de categories
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

// Método GET de 1 categoria
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const category = service.findOne(id);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

//Método GET de Movies
router.get('/:movies', (req, res) => {
  res.json({
    movies: [
      'La llorona',
      'El cuco',
      'La novia fe',
      'Carito vs Pipe',
      'Aliens vs depredador',
      'Matrix',
      'El viejo del saco',
      'Los fantasmas',
      'El fantasma de la novia',
    ],
  });
});

// Método POST
router.post('/', (req, res) => {
  const body = req.body;
  const createdCategory = service.create(body);
  res.status(200).json(createdCategory);
});

//Método DELETE
router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCategory = service.delete(id);
    res.status(201).json(deletedCategory);
  } catch (error) {
    next(error);
  }
});

//Método PATCH
router.patch('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedCategory = service.update(id, body);
    res.status(201).json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
