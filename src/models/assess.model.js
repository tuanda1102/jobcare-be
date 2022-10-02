const { DataTypes } = require("sequelize");

const createTableAssess = (sequelize) => {
  const Assess = sequelize.define("Assess", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recruiterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Assess.associate = (models) => {
    Assess.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user_assess",
    });
    Assess.belongsTo(models.Users, {
      foreignKey: "recruiterId",
      as: "recruiter_assess",
    });
  };

  return Assess;
};

module.exports = createTableAssess;
