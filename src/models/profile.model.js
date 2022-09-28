const { DataTypes } = require("sequelize");

const createTableProfiles = (sequelize) => {
  const Profiles = sequelize.define("Profiles", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: DataTypes.BOOLEAN,
    },
    address: {
      type: DataTypes.STRING(250),
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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });

  Profiles.associate = (models) => {
    Profiles.beLongsTo(models.Users, {
      foreignKey: "userId",
    });
  };

  return Profiles;
};

module.exports = { createTableProfiles };
