const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbconnection");
const course = sequelize.define(
  "course",
  {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },

    courseName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    creditHours: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true, // time and date when data is entered
    paranoid: true,
  }
);
module.exports = course;
