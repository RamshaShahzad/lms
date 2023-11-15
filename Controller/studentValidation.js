const Joi = require("joi");

module.exports = {
  addStudent: Joi.object().keys({
    rollNumber: Joi.number(),
    CGPA: Joi.number(),
    department: Joi.string(),
    userId: Joi.number().required(),
  }),
  deleteStudent: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateStudent: Joi.object().keys({
    rollNumber: Joi.number(),
    CGPA: Joi.number(),
    department: Joi.string(),
  }),
};
