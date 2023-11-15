const studentService = require("../Service/studentService");
const studentSchema = require("../models/schemas/studentSchema");
const studentValidation = require("./studentValidation");

module.exports = {
  getStudents: async (req, res) => {
    const students = await studentService.getStudent();
    res.send(students);
  },
  addStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.addStudent.validate(req.body);
      console.log(req.body);
      console.log(error);
      if (error) {
        return res.send(error.details[0].message);
      }
      const data = req.body;
      const newStudent = await studentService.addStudent(data);
      if (newStudent) {
        return res.status(201).send(newStudent);
      } else {
        return res.status(500).send("Student creation failed");
      }
    } catch (err) {
      return res.status(500).send(err.message); // Internal Server Error
    }
  },

  updateStudent: async (req, res) => {
    try {
      const studentId = req.params.id;
      const data = req.body;
      const { error, value } = studentValidation.updateStudent.validate(
        { ...data },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message); // 400 Bad Request
      }

      const updatedStudentData = await studentService.updateStudent({
        ...value,
        id: studentId,
      });
      console.log(updatedStudentData);
      if (updatedStudentData) {
        return res.send(updatedStudentData);
      } else {
        return res.status(404).send("Student not found"); // 404 Not Found
      }
    } catch (err) {
      return res.status(500).send(err.message); // 500 Internal Server Error
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.deleteStudent.validate(
        { id: req.params.id },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const studentId = req.params.id;
      const deleteResult = await studentService.deleteStudent(studentId);
      console.log(deleteResult);
      if (deleteResult) {
        console.log("Deleted");
        return res.send("Student Deleted Sucsesfullu");
      } else {
        return res.status(404).send("Student not found");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};
