const { models } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config");
// const token = require("../../models/schemas/loginSchema");
let token = [];
const generateToken = (data) => {
  return jwt.sign(data, config.jwtSecret);
};
module.exports = {
  verifyToken: (req, res, next) => {
    let token = req.headers["authorization"];
    token = token && token.split("")[1];
    if (!token) {
      return res.sendStatus(403);
    } else {
      jwt.verify(token, config.jwtSecret, (err, data) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = data;
        next();
        console.log(hah);
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    let user = await models.user.findOne({ where: { email: email } });
    user = user.dataValues;
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const Token = generateToken({ id: user.id });
      token.push(token);
      return res.json({ Token: Token });
    } else {
      return res.send("Wrong Vredentials");
    }
  },
};
