const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const token = sequelize.define("token", {
  id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },

  Token: {
    type: DataTypes.STRING,
  },
});
module.exports = token;
