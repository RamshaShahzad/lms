const Joi = require("joi");

module.exports = {
  addTeacher: Joi.object().keys({
    id: Joi.number(),
    experience: Joi.string(),
    department: Joi.string(),
    userId: Joi.number().required(),
  }),
  deleteTeacher: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateTeacher: Joi.object().keys({
    id: Joi.number(),
    experience: Joi.string(),
    department: Joi.string(),
  }),
};
