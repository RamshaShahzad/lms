const teacher = require("./schemas/teacherSchema");
const user = require("./schemas/userSchema");
const student = require("./schemas/studentSchema");
const course = require("./schemas/courseSchema");
const sequelize = require("../common/dbconnection");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

student.belongsToMany(course, {
  through: "student_course",
  foreignKey: "student_Id",
});
course.belongsToMany(student, {
  through: "student_course",
  foreignKey: "course_Id",
});
teacher.belongsToMany(course, {
  through: "teacher_course",
  foreignKey: "course_Id",
});
course.belongsToMany(teacher, {
  through: "teacher_course",
  foreignKey: "teacher_Id",
});

const models = sequelize.models;
console.log(models);

module.exports = { sequelize, models };
