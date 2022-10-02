const { DataTypes } = require("sequelize");

const createTableJobCategories = (sequelize) => {
  const JobCategories = sequelize.define("JobCategories", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  JobCategories.associate = (models) => {
    JobCategories.hasMany(models.Jobs, {
      as: "job_categories",
    });
  };

  return JobCategories;
};

module.exports = createTableJobCategories;
