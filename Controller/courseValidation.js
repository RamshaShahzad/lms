const Joi = require("joi");

module.exports = {
  addCourse: Joi.object().keys({
    courseName: Joi.string(),
    creditHours: Joi.string(),
  }),
  deleteCourse: Joi.object().keys({
    id: Joi.number().required(),
  }),
  updateCourse: Joi.object().keys({
    id: Joi.number(),
    courseName: Joi.string(),
    creditHours: Joi.string(),
  }),
};
