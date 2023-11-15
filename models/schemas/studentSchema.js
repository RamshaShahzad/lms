const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const student = sequelize.define(
  "student",
  {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    rollNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CGPA: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // time and date when data is entered
    paranoid: true,
  }
);
module.exports = student;
