const Joi = require("joi");

module.exports = {
  addusers: Joi.object().keys({
    id: Joi.number(),
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  deleteusers: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateusers: Joi.object().keys({
    id: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
