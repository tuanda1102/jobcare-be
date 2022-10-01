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
    welfare: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    workFrom: {
      type: DataTypes.STRING,
    },
    endDate: {
      type: DataTypes.STRING,
    },
    careerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Jobs.associate = (models) => {
    Jobs.belongsTo(models.Users, {
      foreignKey: "careerId",
      as: "userjob",
    });
  };

  return Jobs;
};

module.exports = createTableJobs;
