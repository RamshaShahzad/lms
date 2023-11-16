const Joi = require("joi");

module.exports = {
  addTeacher: Joi.object().keys({
    experience: Joi.string(),
    department: Joi.string(),
    userID: Joi.number().required(),
    courseId: Joi.number().optional(),
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
