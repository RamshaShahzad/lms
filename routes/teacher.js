var express = require("express");
var router = express.Router();
const teacherController = require("../Controller/teacherController");

/* GET users listing. */

router.get("/", teacherController.getTeacher);
router.get("/getTeacherCourse/:id", teacherController.getTeacherCourse);
router.post("/addTeacher", teacherController.addTeacher);
router.put("/updateTeacher/:id", teacherController.updateTeacher);
router.delete("/deleteTeacher/:id", teacherController.deleteTeacher);

module.exports = router;
