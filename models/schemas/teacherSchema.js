const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");

const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING,
    },
    experience: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = teacher;
