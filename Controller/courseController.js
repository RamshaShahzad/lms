const courseService = require("../Service/courseService");
const courseSchema = require("../models/schemas/courseSchema");
const courseValidation = require("./courseValidation");

module.exports = {
  getCourse: async (req, res) => {
    const course = await courseService.getCourse();
    res.send(course);
  },
  addCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.addCourse.validate(req.body);
      console.log(error);
      if (error) {
        return res.send(error.details[0].message);
      }
      const data = req.body;
      const newCourse = await courseService.addCourse(data);
      console.log(newCourse);
      if (newCourse) {
        return res.status(201).send(newCourse);
      } else {
        return res.status(500).send("Course creation failed");
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

  updateCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const data = req.body;
      const { error, value } = courseValidation.updateCourse.validate(
        { ...data, id: courseId },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message); // 400 Bad Request
      }

      const updatedCourseData = await courseService.updateCourse({
        ...value,
        courseId,
      });
      console.log(updatedCourseData);
      if (updatedCourseData) {
        return res.send(updatedCourseData);
      } else {
        return res.status(404).send("Course not found"); // 404 Not Found
      }
    } catch (err) {
      return res.status(500).send(err.message); // 500 Internal Server Error
    }
  },
  deleteCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.deleteCourse.validate(
        { id: req.params.id },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const courseId = req.params.id;
      const deleteResult = await courseService.deleteCourse(courseId);
      console.log(deleteResult);
      if (deleteResult) {
        console.log("Deleted");
        return res.send("Course Deleted Sucsesfullu");
      } else {
        return res.status(404).send("Course not found");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};
