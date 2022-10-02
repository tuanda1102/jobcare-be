const { DataTypes } = require("sequelize");

const createTableApplication = (sequelize) => {
  const Application = sequelize.define("Application", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    coverLetter: {
      type: DataTypes.TEXT,
    },
    cv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Application.associate = (models) => {
    Application.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user_application",
    });
    Application.belongsTo(models.Jobs, {
      foreignKey: "jobId",
      as: "job_application",
    });
  };

  return Application;
};

module.exports = createTableApplication;
