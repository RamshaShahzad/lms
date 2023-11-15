var express = require("express");
var router = express.Router();
const courseController = require("../Controller/courseController");

/* GET users listing. */

router.get("/", courseController.getCourse);
router.post("/addCourse", courseController.addCourse);
router.put("/updateCourse:/id", courseController.updateCourse);
router.delete("/deleteCourse:/id", courseController.deleteCourse);

module.exports = router;
