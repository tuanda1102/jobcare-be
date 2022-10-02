const { DataTypes } = require("sequelize");
const { ROLE } = require("../../src/utils/constants.utils");

const createTableUsers = (sequelize) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(319),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ROLE.USER,
    },
    gender: {
      type: DataTypes.BOOLEAN,
    },
    address: {
      type: DataTypes.STRING(),
    },
    phoneNumber: {
      type: DataTypes.STRING(30),
    },
    avatar: {
      type: DataTypes.STRING,
    },
    birth: {
      type: DataTypes.STRING,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Jobs, { as: "recuiter_jobs" });
    Users.hasMany(models.Assess, { as: "user_assess" });
    Users.hasMany(models.Assess, { as: "recruiter_assess" });
    Users.hasMany(models.CurriculumVitae, { as: "user_cv" });
    Users.hasMany(models.Application, { as: "user_application" });
  };

  return Users;
};

module.exports = createTableUsers;
