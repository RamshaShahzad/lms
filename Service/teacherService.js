const { models } = require("../models/index");

module.exports = {
  getTeacher: async () => {
    const teacher = await models.teacher.findAll();
    return teacher;
  },
  addTeacher: async (data) => {
    console.log(data);
    const { courseId, ...teacherData } = data;
    console.log(teacherData);
    const teacher = await models.teacher.create(teacherData);
    console.log(teacherData);
    await teacher.addCourse(courseId);
    return teacher;
  },
  getTeacherCourse: async (id) => {
    const teacher = await models.teacher.findOne({
      where: id,
      include: {
        model: models.Course,
        attributes: ["courseName"],
        through: { attributes: [] },
      },
    });
    return teacher;
  },

  updateTeacher: async (body) => {
    if (!body.id) {
      throw new Error("Teacher ID is required for updating.");
    }

    const { id, ...param } = body;

    try {
      const result = await models.teacher.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "Teacher updated successfully"; // You can return any appropriate success message
      } else {
        throw new Error("Teacher not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },

  deleteTeacher: async (query) => {
    const result = await models.teacher.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
