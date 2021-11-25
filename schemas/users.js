const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const email = Joi.string().email();
const age = Joi.number().integer().min(1).max(99);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  age: age.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  age: age,
});

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema };
