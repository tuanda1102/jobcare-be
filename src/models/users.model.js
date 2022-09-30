const { DataTypes } = require("sequelize");
const { ROLE } = require("../utils/constants.utils");

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
    description: {
      type: DataTypes.TEXT,
    },
    birth: {
      type: DataTypes.DATE,
    },
    education: {
      type: DataTypes.STRING(250),
    },
  });

  Users.associate = (models) => {
    // Users.hasOne(models.Profiles, {
    //   foreignKey: "userId",
    // });
  };

  return Users;
};

module.exports = createTableUsers;
