const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize(config.db);
// console.log(config);
database
  .authenticate()
  .then(() => {
    console.log("DB connection is established");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
