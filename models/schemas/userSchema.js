const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const user = sequelize.define(
  "user",
  {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // time and date when data is entered
    paranoid: true,
  }
);
module.exports = user;
