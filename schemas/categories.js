const Joi = require('joi');

const id = Joi.string().uuid();
const gender = Joi.string().min(3).max(50);
const description = Joi.string().max(100);

const getCategorySchema = Joi.object({
  id: id.required(),
});

const createCategorySchema = Joi.object({
  gender: gender.required(),
  description: description.required(),
});

const updateCategorySchema = Joi.object({
  gender: gender,
  description: description,
});

module.exports = {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
};
