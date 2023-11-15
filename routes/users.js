var express = require("express");
var router = express.Router();
const userController = require("../Controller/userController");

const authenticationController = require("../Controller/common/authenticationController");

/* GET users listing. */
router.post("/login", authenticationController.login);
router.get("/", authenticationController.verifyToken, userController.getusers);
router.post("/addusers", userController.addusers);
router.put("/updateusers/:id", userController.updateusers);
router.delete("/deleteusers/:id", userController.deleteusers);

module.exports = router;
