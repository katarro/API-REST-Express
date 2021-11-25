const express = require('express');
const router = express.Router();
const CategoriesServices = require('../services/categories');
const service = new CategoriesServices();
const validatorHandle = require('../middlewares/validator.handler');
const {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
} = require('../schemas/categories');

// Método GET de categories
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

// Método GET de 1 categoria
router.get(
  '/:id',
  validatorHandle(getCategorySchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const category = service.findOne(id);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
);

// Método POST
router.post('/', validatorHandle(createCategorySchema, 'body'), (req, res) => {
  const body = req.body;
  const createdCategory = service.create(body);
  res.status(200).json(createdCategory);
});

//Método DELETE
router.delete(
  '/:id',
  validatorHandle(getCategorySchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCategory = service.delete(id);
      res.status(201).json(deletedCategory);
    } catch (error) {
      next(error);
    }
  }
);

//Método PATCH
router.patch(
  '/:id',
  validatorHandle(getCategorySchema, 'params'),
  validatorHandle(updateCategorySchema, 'body'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedCategory = service.update(id, body);
      res.status(201).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
