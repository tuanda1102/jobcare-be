const { DataTypes } = require("sequelize");

const createTableJobs = (sequelize) => {
  const Jobs = sequelize.define("Jobs", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.TEXT,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Jobs;
};

module.exports = createTableJobs;
