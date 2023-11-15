const teacherService = require("../Service/teacherService");
const teacherScheme = require("../models/schemas/teacherSchema");
const teacherValidation = require("./teacherValidation");

module.exports = {
  getTeacher: async (req, res) => {
    const teacher = await teacherService.getTeacher();
    res.send(teacher);
  },
  addTeacher: async (req, res) => {
    try {
      const { error, value } = teacherValidation.addTeacher.validate(req.body);
      console.log(error);
      if (error) {
        return res.send(error.details[0].message);
      }
      const data = req.body;
      const newTeacher = await teacherService.addTeacher(data);
      if (newTeacher) {
        return res.status(201).send(newTeacher);
      } else {
        return res.status(500).send("Teacher creation failed");
      }
    } catch (err) {
      return res.status(500).send(err.message); // Internal Server Error
    }
  },

  //   registerTeacher: async (req,res)=>{
  //     try {
  //       const { error, value } = teacherValidation.registerTeacher.validate(teacherId,courseId);
  //       console.log(error);
  //       if (error) {
  //         return res.send(error.details[0].message);
  //       }
  //     const teacherid = teacherId;
  //     const courseid =courseId;
  //     const newTeacher = await teacherService.registerTeacher(data);
  //     if (newTeacher) {
  //       return res.status(201).send(newTeacher);
  //     } else {
  //       return res.status(500).send("Teacher creation failed");
  //     }
  //   } catch (err) {
  //     return res.status(500).send(err.message); // Internal Server Error
  //   }
  // },

  updateTeacher: async (req, res) => {
    try {
      const teacherId = req.params.id;
      const data = req.body;
      const { error, value } = teacherValidation.updateTeacher.validate(
        { ...data, id: teacherId },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message); // 400 Bad Request
      }

      const updatedTeacherData = await teacherService.updateTeacher({
        ...value,
        id: teacherId,
      });
      console.log(updatedTeacherData);
      if (updatedTeacherData) {
        return res.send(updatedTeacherData);
      } else {
        return res.status(404).send("Teacher not found"); // 404 Not Found
      }
    } catch (err) {
      return res.status(500).send(err.message); // 500 Internal Server Error
    }
  },
  deleteTeacher: async (req, res) => {
    try {
      const { error, value } = teacherValidation.deleteTeacher.validate(
        { id: req.params.id },
        { abortEarly: false }
      );

      if (error) {
        // If validation fails, return a 400 Bad Request response with the first validation error message
        return res.status(400).send(error.details[0].message);
      }

      const teacherId = req.params.id;
      const deleteResult = await teacherService.deleteTeacher(teacherId);
      console.log(deleteResult);
      if (deleteResult) {
        console.log("Deleted");
        return res.send("Teacher Deleted Sucsesfullu");
      } else {
        return res.status(404).send("Teacher not found");
      }
    } catch (err) {
      // Handle unexpected errors (e.g., server/database errors)
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};
