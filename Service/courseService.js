const { models } = require("../models/index");

module.exports = {
  getCourse: async () => {
    const course = await models.Course.findAll();
    return course;
  },
  addCourse: async (data) => {
    const course = await models.Course.create(data);
    return course;
  },

  updateCourse: async (body) => {
    if (!body.id) {
      throw new Error("Course ID is required for updating.");
    }

    const { id, ...param } = body;

    try {
      const result = await models.Course.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "Course updated successfully"; // You can return any appropriate success message
      } else {
        throw new Error("Course not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },

  deleteCourse: async (query) => {
    const result = await models.Course.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
