var express = require("express");
var router = express.Router();
const userController = require("../Controller/studentController");

/* GET users listing. */

router.get("/", userController.getStudents);
router.post("/addStudent", userController.addStudent);
router.put("/updateStudent/:id", userController.updateStudent);
router.delete("/deleteStudent/:id", userController.deleteStudent);

module.exports = router;
