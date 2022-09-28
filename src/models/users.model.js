const { DataTypes } = require("sequelize");

const createTableUsers = (sequelize) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(250),
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
      defaultValue: "user",
    },
  });

  Users.associate = (models) => {
    Users.hasOne(models.Profiles, {
      foreignKey: "userId",
    });
  };

  return Users;
};

module.exports = { createTableUsers };
