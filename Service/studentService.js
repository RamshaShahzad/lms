const { models } = require("../models/index");

module.exports = {
  getStudent: async () => {
    const students = await models.student.findAll({ include: models.user });
    return students;
    create;
  },
  addStudent: async (data) => {
    const student = await models.student.create(data);
    return student;
  },
  updateStudent: async (body) => {
    if (!body.id) {
      throw new Error("Student ID is required for updating.");
    }

    const { id, ...param } = body;
    console.log("ID", id);

    try {
      const result = await models.student.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "Student updated successfully";
      } else {
        throw new Error("Student not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },

  deleteStudent: async (query) => {
    const result = await models.student.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
